import { CartOrder } from "@/types/Order";
import css from "./style.module.css";
import { getMenuItem } from "@/Data/Menu";

type OrderBoxCardProps = {
  order: CartOrder;
  onAdd: (item: { menuId: string }) => void;
  onMinus: (item: { menuId: string }) => void;
};
const OrderBoxCard = ({ order }: OrderBoxCardProps) => {
  const menu = getMenuItem(order.menuId);
  const amount = order.amount;
  return (
    <div className={css["container"]}>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <img src={menu.image} width={40} />
        <p style={{ paddingLeft: "10px", marginTop: "6px" }}>{menu.name}</p>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ paddingLeft: "60px" }}>price : {menu.price * amount}</p>
        <p style={{ paddingLeft: "60px" }}>จำนวน : {amount}</p>
      </div>
    </div>
  );
};
export default OrderBoxCard;
