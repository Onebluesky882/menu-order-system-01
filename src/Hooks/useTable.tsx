import { CartOrder, Order, OrderTable } from "@/types/Order";
import { TableOrder } from "@/types/TableOrder";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "@/utils/string";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const defaultTable: TableOrder = {
  status: "AVAILABLE" as const,
  tableNo: "0",
  seat: 3,
};

export const useTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [table, setTable] = useState<TableOrder>(defaultTable);

  useEffect(() => {
    loadOrder();

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
        (payload: any) => {
          console.log("payload", payload);
          loadOrder();
        }
      )
      .subscribe();
    // console.log("subscribe");

    return () => {
      channels.unsubscribe();
    };
  }, []);

  const loadOrder = async () => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", table.tableNo);

    if (data) {
      const camelData = data.map((i) => transformKeysToCamelCase(i));
      console.log("loadOrder :", table.tableNo);
      setOrders(camelData);
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

  const submitTable = async (tableNo: TableOrder["tableNo"]) => {
    const newTable = { ...defaultTable, tableNo };

    await supabase.from("tables").update([transformKeysToSnakeCase(newTable)]);

    setTable(newTable);

    await loadTable();
  };

  const loadTable = async () => {
    await supabase.from("tables").select();
  };

  //test createTable
  // const createTable = async () => {
  //   const buildTable = tables.map((table) => ({
  //     tableNo: table.tableNo as unknown as string,
  //     seat: 0,
  //     status: table.status as unknown as string,
  //   }));

  //   await supabase.from("tables").insert(transformKeysToSnakeCase(buildTable));
  // };

  return {
    orders,
    setOrders,
    submitCart,
    table,
    setTable,
    submitTable,
  };
};

export const defaultTableProvider = {
  table: defaultTable,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  setTable: () => null,
  submitTable: () => Promise.resolve(),
};
