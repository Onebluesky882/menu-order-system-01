import table from "@/Data/TableData";
import css from "./Table.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { ConfirmTable } from "./ConfirmTable";
import Table from "../../Page/Table/index";

type TableProps = {
  tableNo: string;
  status: string;
};

export const TablesMap = ({
  tableNo,
  status,
  clientName = "",
  position,
}: TableProps & {
  clientName: string;
  position: string;
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
      <div
        className={`${
          position === "right" ? css["right-section"] : css["left-section"]
        }`}
      >
        <div className="table-box" onClick={confirm}>
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
    <>
      {table.map((table) => (
        <TablesMap
          status={status}
          clientName={clientName}
          tableNo={table.tableNo}
          position={table.position}
        />
      ))}
    </>
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
