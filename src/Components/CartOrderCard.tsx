import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CartOrder } from "@/types/Order";
import { getMenuItem } from "@/Data/Menu";
import css from "./style/CartOrderCard.module.css";

type CartOrderCardProps = {
  order: CartOrder;
  onMinus: (item: { menuId: string }) => void;
  onAdd: (item: { menuId: string }) => void;
};

export const CartOrderCard = ({
  order,
  onMinus,
  onAdd,
}: CartOrderCardProps) => {
  const menu = getMenuItem(order.menuId);
  const amount = order.amount;

  return (
    <div className={css["container"]}>
      <div className={css["section"]}>
        <img src={menu.image} width={80} />
        <h3>{menu.name}</h3>
        <CiCircleMinus onClick={() => onAdd({ menuId: order.menuId })} />
        <p>price : {menu.price * amount}</p>
        <p>จำนวน ใหม่ {amount}</p>
        <CiCirclePlus onClick={() => onMinus({ menuId: order.menuId })} />
      </div>
    </div>
  );
};
