import tableLocal from "@/Data/TableData";
import css from "./styles.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

type OrderTableProps = {
  status: string;
  loadOrderTableNo: (table: string) => void;
  setTableOrder: () => void;
  navigate: (url: string) => void;
};

export const OrderTables = ({
  loadOrderTableNo,
  navigate,
  setTableOrder,
  status,
}: OrderTableProps) => {
  const tableRightSide = tableLocal.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = tableLocal.filter((t) => t.tableNo.startsWith("B"));

  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        {tableLeftSide.map((table) => {
          const { orderTables, tableObject } =
            useContext(GlobalContext).tableProvider;
          const matchTable = orderTables.filter(
            (t) => t.tableNo === table.tableNo
          );

          const amount = matchTable.reduce(
            (acc, order) => acc + order.amount,
            0
          );

          const tableClient = tableObject.find(
            (t) => t.status === "OCCUPIED" && t.tableNo === table.tableNo
          );

          return (
            <OrderTableCard
              key={table.tableNo}
              // todo status of table
              status={tableClient?.status as string}
              client={(tableClient?.customerName as string) || ""}
              tableNo={table.tableNo}
              loadOrderTableNo={() => loadOrderTableNo(table.tableNo)}
              navigate={navigate}
              setTableOrder={setTableOrder}
              orderAmount={amount}
            />
          );
        })}
      </div>

      <div className={css["table-container-section-right"]}>
        {tableRightSide.map((table) => {
          const { orderTables, tableObject } =
            useContext(GlobalContext).tableProvider;
          const matchTable = orderTables.filter(
            (t) => t.tableNo === table.tableNo
          );

          const amount = matchTable.reduce(
            (sum, order) => sum + order.amount,
            0
          );

          const customerName = tableObject.find(
            (t) => t.tableNo === table.tableNo && t.status === "OCCUPIED"
          )?.customerName;

          return (
            <OrderTableCard
              key={table.tableNo}
              status={status}
              client={customerName as string}
              tableNo={table.tableNo}
              loadOrderTableNo={() =>
                loadOrderTableNo(table.tableNo as unknown as string)
              }
              navigate={navigate}
              setTableOrder={setTableOrder}
              orderAmount={amount}
            />
          );
        })}
      </div>
    </TableContainer>
  );
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={css["table-container"]}>
      <div className={css["table-section"]}>{children}</div>
    </div>
  );
};

export const OrderTableCard = ({
  tableNo,
  status,
  client = "",
  loadOrderTableNo,
  navigate,
  orderAmount,
}: {
  tableNo: string;
  status: string;
  client: string;
  orderAmount: number;
  setTableOrder: ([]) => void;
  loadOrderTableNo: (table: string) => void;

  navigate: (url: string) => void;
}) => {
  const handleSubmit = () => {
    if (orderAmount === 0) {
      alert("เลือกโต๊ะอาหาร");
      navigate("/tables");
    } else {
      navigate(`/order/${tableNo.toLowerCase()}`);
      loadOrderTableNo(tableNo);
    }
  };

  return (
    <div
      className={css["table-frame-rounded"]}
      style={{
        ...TableStatusColor(orderAmount),
      }}
      onClick={handleSubmit}
    >
      <h3>{tableNo}</h3>
      {client !== "" && (
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "25px",
            ...TableStatusColor(orderAmount),
          }}
        >{`${client}`}</p>
      )}
      {orderAmount !== 0 || status === "OCCUPIED" ? (
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "20px",
            ...TableStatusColor(orderAmount),
          }}
        >
          รายการอาหาร : {orderAmount}{" "}
        </p>
      ) : (
        <p>รายการอาหารเสร็จสมบูรณ์</p>
      )}
      <p>{`${status} `}</p>
    </div>
  );
};

export const TableStatusColor = (count: number): React.CSSProperties => {
  switch (true) {
    case count === 0:
      return { backgroundColor: "#B4D59D" };
    case count > 1 && count <= 5:
      return { backgroundColor: "#EF9364", color: "white" };
    case count > 5 && count <= 20:
      return { backgroundColor: "#D85543", color: "white" };

    default:
      return {
        backgroundColor: "white",
      };
  }
};
