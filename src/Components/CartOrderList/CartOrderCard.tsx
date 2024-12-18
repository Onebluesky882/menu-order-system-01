import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CartOrder } from "@/types/Order";
import { getMenuItem } from "@/Data/Menu";
import css from "./CartOrderCard.module.css";

type CartOrderCardProps = {
  order: CartOrder;
  onMinus: (item: { menuId: string }) => void;
  onAdd: (item: { menuId: string }) => void;
};

export const CartOrderList = ({
  order,
  onMinus,
  onAdd,
}: CartOrderCardProps) => {
  const menu = getMenuItem(order.menuId);
  const amount = order.amount;

  return (
    <div className={css["container"]}>
      <div className={css["section"]}>
        <img src={menu.image} width={120} />
        <div>
          <div>
            <h3>{menu.name}</h3>
          </div>
          <div className={css.orderDetailBox}>
            <p>price : {menu.price * amount}</p>
            <p>จำนวน : {amount}</p>
          </div>
          <div className={css.orderIconBox}>
            <CiCircleMinus
              size={28}
              color="red"
              onClick={() => onMinus({ menuId: order.menuId })}
            />
            <CiCirclePlus
              size={28}
              color="green"
              onClick={() => onAdd({ menuId: order.menuId })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartOrderContainer = ({
  children,
  style,
}: React.PropsWithChildren & { style: React.CSSProperties }) => {
  return (
    <div style={style} className={css.CartOrderContainer}>
      {children}
    </div>
  );
};
