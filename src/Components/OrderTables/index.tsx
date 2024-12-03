import { table as tableData } from "@/Data/TableData";
import css from "./styles.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

type OrderTableProps = {
  client?: string;
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
  client,
}: OrderTableProps) => {
  const tableRightSide = tableData.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = tableData.filter((t) => t.tableNo.startsWith("B"));

  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        {tableLeftSide.map((table) => {
          const { orderTables } = useContext(GlobalContext).tableProvider;
          const matchTable = orderTables.find(
            (t) => t.tableNo === table.tableNo
          );

          return (
            <OrderTableCard
              key={table.tableNo}
              status={status}
              client={client || ""}
              tableNo={table.tableNo}
              loadOrderTableNo={() => loadOrderTableNo(table.tableNo)}
              navigate={navigate}
              setTableOrder={setTableOrder}
              orderAmount={4}
            />
          );
        })}
      </div>

      <div className={css["table-container-section-right"]}>
        {tableRightSide.map((table) => (
          <OrderTableCard
            key={table.tableNo}
            status={status}
            client={client || ""}
            tableNo={table.tableNo}
            loadOrderTableNo={() =>
              loadOrderTableNo(table.tableNo as unknown as string)
            }
            navigate={navigate}
            setTableOrder={setTableOrder}
            orderAmount={4}
          />
        ))}
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
    navigate(`/order/${tableNo.toLowerCase()}`);
    loadOrderTableNo(tableNo);
  };

  return (
    <div
      className={css["table-frame-rounded"]}
      style={{
        ...TableStatusColor(status),
      }}
      onClick={handleSubmit}
    >
      {client !== "" && <p>{`${client}`}</p>}
      <p>รายการอาหารคงค้าง : {orderAmount} </p>
      <p>{`${status} `}</p>
      <h3>{tableNo}</h3>
    </div>
  );
};

export const TableStatusColor = (status: string): React.CSSProperties => {
  switch (status) {
    case "AVAILABLE":
      return { backgroundColor: "#B2D3AC" };
    case "OCCUPIED":
      return { backgroundColor: "#E98874" };
    case "CLEANING":
      return { backgroundColor: "#ADB2BF" };
    case "RESERVED":
      return { backgroundColor: "#F7CC43" };
    default:
      return {
        backgroundColor: "white",
      };
  }
};
