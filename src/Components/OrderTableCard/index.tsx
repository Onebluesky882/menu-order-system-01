import { Link } from "react-router-dom";
import css from "./OrderTable.module.css";

type OrderTableCardProps = {
  tableNo: string;
  status: string;
  nickname: string;
};

// todo optimize css

export const OrderTableCard = ({
  tableNo,
  status,
  nickname = "ชื่อลูกค้า",
}: OrderTableCardProps & { position: any }) => {
  return (
    <div>
      <div
        className={css["order-table"]}
        style={{ ...TableStatusColor(status) }}
      >
        <Link to={tableNo}>
          <p style={{}}>
            <div>{nickname}</div>
            {tableNo}
          </p>
          <p>{status}</p>
        </Link>
      </div>
    </div>
  );
};

export default OrderTableCard;

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
