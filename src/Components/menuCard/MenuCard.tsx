import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MenuItem } from "@/types/MenuItem";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import css from "./MenuCard.module.css";

export type MenuCardProps = MenuItem;

export const MenuCard = ({ id, image, name, price }: MenuCardProps) => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const menuItem = orders.find((item) => item.menuId === id);
  const amount = menuItem?.amount ?? 0;

  return (
    <div className={css["container"]}>
      <img src={image} alt={image} width={160} />

      <h3>{name}</h3>

      <p>{`ราคา : ${price} บาท`}</p>

      <div className={css["icon-section"]}>
        <CiCircleMinus onClick={() => onMinus({ menuId: id })} />
        <p> {`จำนวนสินค้า : ${amount}`}</p>

        <CiCirclePlus onClick={() => onAdd({ menuId: id })} />
      </div>
    </div>
  );
};
