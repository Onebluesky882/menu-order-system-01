import { getMenuItem } from "@/Data/Menu";
import { Order } from "@/types/Order";
import css from "./style.module.css";
export type TableOrderCardProps = {
  order: Order;
};

const CartCard = ({ order }: TableOrderCardProps) => {
  const menuItem = getMenuItem(order.menuId);
  const amount = order.amount;

  return (
    <div className={css["container"]}>
      <div
        className={css["box"]}
        style={{ display: "flex", marginTop: "10px" }}
      >
        <img
          src={menuItem.image}
          width={50}
          style={{
            objectFit: "cover",
            background: "white",
          }}
        />
        <div style={{ marginLeft: "20px" }}>
          <h3 style={{ fontSize: "12px" }}>{menuItem.name}</h3>
          <p style={{ color: "red", fontWeight: "bold" }}>
            {`฿${menuItem.price * amount}`}
          </p>
          <p>
            {order.status} {order.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
