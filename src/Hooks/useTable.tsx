import { CartOrder, Order, OrderTable } from "@/types/Order";
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
};

export const useTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);
  const [allTable, setAllTable] = useState<Table[]>([]);

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
        (payload: unknown) => {
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
    changeTableStatus,
  };
};

export const defaultTableProvider = {
  table: defaultTable,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  setTable: () => null,
  changeTableStatus: () => Promise.resolve(),
};
