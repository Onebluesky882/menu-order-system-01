import { table as tableData } from "@/Data/TableData";
import css from "./styles.module.css";

type OrderTableProps = {
  client?: string;
  status: string;
  loadOrderTableNo: (table: string) => void;
  setOrdersTableNo: () => void;
  navigate: (url: string) => void;
};

export const OrderTables = ({
  loadOrderTableNo,
  navigate,
  setOrdersTableNo,
  status,
  client,
}: OrderTableProps) => {
  const tableRightSide = tableData.filter((t) => t.tableNo.startsWith("A"));
  const tableLeftSide = tableData.filter((t) => t.tableNo.startsWith("B"));

  return (
    <TableContainer>
      <div className={css["table-container-section-left"]}>
        return (
        {tableRightSide.map((table) => (
          <OrderTableCard
            status={status}
            client={client || ""}
            tableNo={table.tableNo}
            loadOrderTableNo={() => loadOrderTableNo(table.tableNo)}
            navigate={navigate}
            setOrdersTableNo={setOrdersTableNo}
          />
        ))}
        );
      </div>

      <div className={css["table-container-section-right"]}>
        {tableLeftSide.map((table) => (
          <OrderTableCard
            status={status}
            client={client || ""}
            tableNo={table.tableNo}
            loadOrderTableNo={() =>
              loadOrderTableNo(table.tableNo as unknown as string)
            }
            navigate={navigate}
            setOrdersTableNo={setOrdersTableNo}
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
  setOrdersTableNo,
  navigate,
}: {
  tableNo: string;
  status: string;
  client: string;
  loadOrderTableNo: (table: string) => void;
  setOrdersTableNo: (item: []) => void;
  navigate: (url: string) => void;
}) => {
  const handleSubmit = () => {
    navigate(`/order/${tableNo.toLowerCase()}`);
    setOrdersTableNo([]);
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
      <p>รายการอาหารคงค้าง</p>
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
