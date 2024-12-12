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
  const [allTables, setAllTables] = useState<Table[]>([]);
  const [orderTables, setOrderTables] = useState<OrderTables[]>([]);

  const [confirmSelectedTableNo, setConfirmSelectedTableNo] = useState<
    string | null
  >(null);

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
        },
        (payload: unknown) => {
          console.log("Table status payload:", payload);
          loadTable(); // Your function to handle table status updates
        }
      )
      .subscribe((status) => {
        if (!status) {
          console.log("error");
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

  // todo
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

  const changeTableStatus = async (No: Table["tableNo"]) => {
    const newTable = { ...defaultTable, tableNo: No, status: "OCCUPIED" };
    const { data, error } = await supabase
      .from("tables")
      .update(transformKeysToSnakeCase(newTable))
      .eq("table_no", No);
    if (data) {
      console.log("newTable :", newTable);
    }

    if (error) {
      console.error("Error updating table:", error);
      return;
    }
    setTable(newTable as Table);

    await loadTable();
  };

  const loadTable = async () => {
    const { data } = await supabase.from("tables").select();

    if (data) {
      const transform =
        data.map((table) => transformKeysToCamelCase(table)) ?? [];

      setAllTables(transform);
    }
  };

  //test createTable
  // const createTable = async () => {
  //   const buildTable = tables.map((table) => ({
  //     tableNo: table.tableNo as unknown as string,
  //     seat: 0,
  //     status: table.status as unknown as string,
  //   }));

  //   const { error } = await supabase
  //     .from("tables")
  //     .insert(transformKeysToSnakeCase(buildTable));
  //   if (error) {
  //     console.error("Error inserting data:");
  //   } else {
  //     console.log("Data inserted successfully");
  //   }
  // };

  // add customer to reserve table
  const CustomerFieldName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getDataForm = new FormData(e.currentTarget);
    // keep data from input ui to state

    const convert = {
      ...defaultTable,
      customerName: getDataForm.get("name"),
    };

    const transform = transformKeysToSnakeCase(convert);
    console.log("Transformed data:", transform);
    console.log("confirmSelectedTableNo:", confirmSelectedTableNo);
    const { data, error } = await supabase
      .from("tables")
      .update(transform)
      .eq("table_no", confirmSelectedTableNo);
    if (data) {
      console.log("Update successful:", data);
    } else {
      console.error("Update failed:", error);
    }
  };

  return {
    orders,
    setOrders,
    submitCart,
    table,
    setTable,
    changeTableStatus,
    allTables,
    tableOrder,
    loadOrderTableNo,
    setTableOrder,
    orderTables,
    CustomerFieldName,
    setConfirmSelectedTableNo,
    confirmSelectedTableNo,
  };
};

export const defaultTableProvider = {
  table: defaultTable,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  setTable: () => null,
  changeTableStatus: () => Promise.resolve(),
  allTables: [],
  loadOrderTableNo: () => Promise.resolve(),
  ordersTableNo: [],
  setOrdersTableNo: () => null,
  orderTables: [],
  CustomerFieldName: () => Promise.resolve(),
  setConfirmSelectedTableNo: () => null,
  confirmSelectedTableNo: null,
  tableOrder: [],
  setTableOrder: () => null,
};
