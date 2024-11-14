import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TableStatusColor } from "../OrderTableCard/tableStyle";

type TableProps = {
  tableNo: string;
  status: string;
};

type TableCardProps = {
  position: string;
};

// todo should same with order table

export const TablesMap = ({ tableNo, status }: TableProps) => {
  const navigate = useNavigate();
  const { setConfirmSelectedTableNo } = useContext(GlobalContext);

  const handleSubmit = () => {
    setConfirmSelectedTableNo(tableNo);
    navigate(`/confirm-table-no`);
    // navigate(`/${tableNo}`);
  };
  return (
    <div>
      <button
        //Link
        style={{
          background: "none",
          textDecoration: "none",
          color: "black",
          borderStyle: "none",
          backgroundColor: "Background",
        }}
        onClick={handleSubmit}
      >
        {" "}
        <div
          style={{
            ...TableStatusColor(status),
            padding: "25px",
            borderRadius: "999px",
            margin: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {tableNo}
          </p>
          <p style={{ textAlign: "center", fontSize: "14px" }}>{status}</p>
        </div>
      </button>
    </div>
  );
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        padding: "20px",
        justifyContent: "center",
        background: "#F2F2F2",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}> แผนผังที่นั่ง</h1>
      <div
        style={{
          display: "flex",
          background: "white",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const TableCard = ({
  children,
  position,
}: React.PropsWithChildren<TableCardProps>) => {
  return (
    <div style={{ padding: "0px" }}>
      <p style={{ textAlign: "center", margin: "-20px", marginTop: "20px" }}>
        {position}
      </p>
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};
