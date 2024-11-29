import { table as tableData } from "@/Data/TableData";
import css from "./styles.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useNavigate } from "react-router-dom";

type OrderTableProps = {
  confirmTable: boolean;
  setConfirmTable: () => void;
  setConfirmSelectedTableNo: (tableNo: string) => void;
  client?: string;
};

export const OrderTables = ({ client }: OrderTableProps) => {
  const tableRightSide = tableData.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = tableData.filter((t) => t.tableNo.startsWith("B"));

  const { allTables } = useContext(GlobalContext).tableProvider;

  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        {tableLeftSide.map((t) => {
          const tableStatus = allTables.find(
            (table) => table.tableNo === t.tableNo
          )?.status;
          return (
            <OrderTableCard
              key={t.tableNo}
              status={tableStatus as unknown as string}
              client={client || ""}
              tableNo={t.tableNo}
            />
          );
        })}
      </div>

      <div className={css["table-container-section-right"]}>
        {tableRightSide.map((t) => {
          const tableStatus = allTables.find(
            (table) => table.tableNo === t.tableNo
          )?.status;
          return (
            <OrderTableCard
              key={t.tableNo}
              tableNo={t.tableNo}
              status={tableStatus as unknown as string}
              client={client || ""}
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
}: {
  tableNo: string;
  status: string;
  client: string;
}) => {
  const navigate = useNavigate();
  const { loadOrderTableNo } = useContext(GlobalContext).tableProvider;
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
