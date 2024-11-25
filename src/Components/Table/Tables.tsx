import table from "@/Data/TableData";
import css from "./Table.module.css";

export const TablesMap = ({}: {}) => {
  const tableRightSide = table.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = table.filter((t) => t.tableNo.startsWith("B"));
  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        {tableLeftSide.map((t) => (
          <TableCard key={t.tableNo} tableNo={""} />
        ))}
      </div>

      <div className={css["table-container-section-right"]}>
        {tableRightSide.map((t) => {
          return <TableCard key={t.tableNo} tableNo={t.tableNo} />;
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

export const TableCard = ({ tableNo }: { tableNo: string }) => {
  return (
    <div
      className={css["table-frame-rounded"]}
      style={{
        ...TableStatusColor(status),
      }}
    >
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
