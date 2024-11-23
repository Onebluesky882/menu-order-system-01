import table from "@/Data/TableData";
import css from "./Table.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { ConfirmTable } from "./ConfirmTable";

type TableProps = {
  tableNo: string;
  status: string;
};

const leftSide = table.filter((table) => table.position === "left");
const rightSide = table.filter((table) => table.position === "right");

export const TablesMap = ({
  tableNo,
  status,
  clientName = "",
}: TableProps & {
  clientName: string;
}) => {
  const { setShowConfirmTable, showConfirmTable, setConfirmSelectedTableNo } =
    useContext(GlobalContext);

  const confirm = () => {
    if (status === "AVAILABLE") {
      setConfirmSelectedTableNo(tableNo);
      setShowConfirmTable(true);
    } else {
      alert("not available");
    }
  };

  return (
    <div>
      <div className={css["table-style"]} onClick={confirm}>
        <div
          className={css["table-frame-rounded"]}
          style={{
            ...TableStatusColor(status),
          }}
        >
          <p> {clientName !== "" && `${clientName}`}</p>
          <h3 className={css["table-style"]}>{tableNo}</h3>
          <p style={{ textAlign: "center", fontSize: "14px" }}>{status}</p>
        </div>
      </div>
      {showConfirmTable && <ConfirmTable />}
    </div>
  );
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={css["table-container"]}>
      <div className={css["table-container-section"]}>{children}</div>
    </div>
  );
};

export const TableCard = ({
  status,
  clientName,
}: {
  status: string;
  clientName: string;
}) => {
  return (
    <TableContainer>
      <div>
        {rightSide.map((t) => (
          <TablesMap
            key={t.tableNo}
            tableNo={t.tableNo}
            status={status}
            clientName={clientName}
          />
        ))}
      </div>
      <div>
        {leftSide.map((t) => (
          <TablesMap
            key={t.tableNo}
            tableNo={t.tableNo}
            status={status}
            clientName={clientName}
          />
        ))}
      </div>
    </TableContainer>
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
