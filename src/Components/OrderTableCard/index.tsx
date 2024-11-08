import { Link } from "react-router-dom";

type OrderTableCardProps = {
  tableNo: string;
  status: string;
  nickname: string;
};

type TableCardProps = {
  position: string;
};

export const OrderTableCard = ({
  tableNo,
  status,
  nickname = "ชื่อลูกค้า",
}: OrderTableCardProps) => {
  return (
    <div>
      <Link to={tableNo}>
        <button
          //Link
          style={{
            textDecoration: "none",
            color: "black",
            borderStyle: "none",
            backgroundColor: "Background",
          }}
        >
          {" "}
          <div
            style={{
              ...GetStatusStyles(status),
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
              <div>{nickname}</div>

              {tableNo}
            </p>
            <p style={{ textAlign: "center", fontSize: "14px" }}>{status}</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export const GetStatusStyles = (status: string): React.CSSProperties => {
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
export default OrderTableCard;
