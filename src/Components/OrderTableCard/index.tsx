import { Link } from "react-router-dom";
import { TableStatusColor } from "./tableStyle";
import css from "../style/orderTable.module.css";

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
