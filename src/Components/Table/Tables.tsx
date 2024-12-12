import tableLocal from "@/Data/TableData";
("@/Data/TableData");
import css from "./Table.module.css";
import { ConfirmTable } from "./ConfirmTable";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

type TableMapProps = {
  confirmTable: boolean;
  setConfirmTable: () => void;
  setConfirmSelectedTableNo: (tableNo: string) => void;
  client?: string;
};

export const TablesMap = ({
  confirmTable,
  setConfirmTable,
  setConfirmSelectedTableNo,
  client,
}: TableMapProps) => {
  const tableRightSide = tableLocal.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = tableLocal.filter((t) => t.tableNo.startsWith("B"));

  const { tableObject } = useContext(GlobalContext).tableProvider;

  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        {tableLeftSide.map((t) => {
          const tableStatus = tableObject.find(
            (table) => table.tableNo === t.tableNo
          )?.status;

          return (
            <>
              <TableCard
                key={t.tableNo}
                tableNo={t.tableNo}
                setConfirmSelectedTableNo={(tableNo) =>
                  setConfirmSelectedTableNo(tableNo)
                }
                setConfirmTable={setConfirmTable}
                status={tableStatus as unknown as string}
                client={client || ""}
              />
            </>
          );
        })}
      </div>

      <div className={css["table-container-section-right"]}>
        {tableRightSide.map((t) => {
          const tableStatus = tableObject.find(
            (table) => table.tableNo === t.tableNo
          )?.status;
          return (
            <TableCard
              key={t.tableNo}
              tableNo={t.tableNo}
              setConfirmSelectedTableNo={(tableNo) =>
                setConfirmSelectedTableNo(tableNo)
              }
              setConfirmTable={setConfirmTable}
              status={tableStatus as unknown as string}
              client={client || ""}
            />
          );
        })}
      </div>
      {confirmTable && <ConfirmTable />}
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

export const TableCard = ({
  tableNo,
  setConfirmSelectedTableNo,
  setConfirmTable,
  status,
  client = "",
}: {
  tableNo: string;
  status: string;
  client: string;
  setConfirmSelectedTableNo: (tableNo: string) => void;
  setConfirmTable: (popup: boolean) => void;
}) => {
  const handleSubmit = () => {
    if (status !== "AVAILABLE") {
      alert(" Table not available");
    } else {
      setConfirmSelectedTableNo(tableNo);
      setConfirmTable(true);
    }
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
