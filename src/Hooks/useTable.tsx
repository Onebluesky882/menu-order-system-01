import { getMenuItem, menu } from "@/Data/Menu";
import {
  CartOrder,
  Order,
  OrderTable,
  OrderTableNo,
  OrderTables,
} from "@/types/Order";
import { Table } from "@/types/TableOrder";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "@/utils/string";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const defaultTable: Table = {
  status: "AVAILABLE" as const,
  tableNo: "0",
  seat: 3,
  customerName: "",
};

export const useTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [tableOrder, setTableOrder] = useState<OrderTableNo[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);
  const [tableObject, setTablesObject] = useState<Table[]>([]);
  const [orderTables, setOrderTables] = useState<OrderTables[]>([]);
  const [customerName, setCustomerName] = useState<string | null>(null);

  useEffect(() => {
    loadOrder();
    loadTable();
    loadOrderTables();
    // passive interaction, trigger based on changes of the order relate to this table
    const channels = supabase
      .channel("subscribe-order-table-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
          filter: `table_no=eq.${table.tableNo}`,
        },
        (payload: unknown) => {
          console.log("payload", payload);
          loadOrder();
        }
      )
      .subscribe();
    const statusChannel = supabase
      .channel("subscribe-table-status-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tables",
          filter: "status",
        },
        (payload: unknown) => {
          console.log("Table status payload:", payload);
          loadTable(); // Your function to handle table status updates
        }
      )

      .subscribe((status) => {
        if (!status) {
          console.error("Error subscribing to the channel");
        }
      });

    return () => {
      channels.unsubscribe();
      statusChannel.unsubscribe();
    };
  }, []);

  const loadOrder = async () => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", table.tableNo);

    if (data) {
      const camelData = data.map((i) => transformKeysToCamelCase(i));

      setOrders(camelData);
    }
  };

  const loadOrderTableNo = async (tableNo: string) => {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .eq("table_no", tableNo);
    if (error) {
      return setTableOrder([]);
    }
    if (data) {
      const camelData = data.map((item) => transformKeysToCamelCase(item));

      const mergeOrder: OrderTableNo[] = camelData
        .map((item: Order) => {
          const orderTableNo = menu.find((menu) => menu.id === item.menuId);

          if (!orderTableNo) {
            return undefined;
          }
          if (orderTableNo) {
            const getMenu = getMenuItem(orderTableNo.id);

            return {
              ...item,
              name: getMenu.name,
              category: getMenu.category,
              image: getMenu.image,
              price: getMenu.price,
            } as OrderTableNo;
          }
        })
        .filter((item): item is OrderTableNo => item !== undefined);

      setTableOrder(mergeOrder);
    }
  };

  const loadOrderTables = async () => {
    const { data } = await supabase.from("orders").select();
    if (data) {
      const transform = data.map((order) => transformKeysToCamelCase(order));

      setOrderTables(transform);
    }
  };

  const submitCart = async (submitOrder: CartOrder[]) => {
    const prepareOrder: OrderTable[] = submitOrder.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "ORDERED",
      tableNo: table.tableNo as unknown as string,
    }));

    const transformKeys = prepareOrder.map((i) => transformKeysToSnakeCase(i));

    await supabase.from("orders").insert(transformKeys);

    await loadOrder();

    setOrders([...orders, ...prepareOrder]);
  };

  const changeTableOnSubmit = async (
    No: Table["tableNo"],
    customerName: Table["customerName"]
  ) => {
    const newTable = {
      ...defaultTable,
      tableNo: No,
      status: "OCCUPIED",
      customerName: customerName,
    };
    await supabase
      .from("tables")
      .update(transformKeysToSnakeCase(newTable))
      .eq("table_no", No);

    setTable(newTable as Table);
  };

  const loadTable = async () => {
    const { data } = await supabase.from("tables").select();

    if (data) {
      const transform =
        data.map((table) => transformKeysToCamelCase(table)) ?? [];

      setTablesObject(transform);
    }
  };

  const tableNoReOrder = async (no: Table["tableNo"]) => {
    const { data } = await supabase.from("tables").select().eq("table_no", no);

    if (data && data.length >= 0) {
      const tableOrder = transformKeysToCamelCase(data[0]);

      setTable({
        ...defaultTable,
        tableNo: tableOrder.tableNo,
        customerName: tableOrder.customerName,
      });
    }
  };

  return {
    orders,
    setOrders,
    submitCart,
    table,
    setTable,
    changeTableOnSubmit,
    tableObject,
    tableOrder,
    loadOrderTableNo,
    setTableOrder,
    orderTables,
    customerName,
    setCustomerName,
    tableNoReOrder,
  };
};

export const defaultTableProvider = {
  table: defaultTable,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  setTable: () => null,
  changeTableOnSubmit: () => Promise.resolve(),
  tableObject: [],
  loadOrderTableNo: () => Promise.resolve(),
  ordersTableNo: [],
  setOrdersTableNo: () => null,
  orderTables: [],
  tableOrder: [],
  setTableOrder: () => null,
  customerName: "",
  setCustomerName: () => null,
  tableNoReOrder: () => Promise.resolve(),
};
