import { MenuItem } from "@/types/MenuItem";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import css from "./style/MenuCard.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

export type MenuCardProps = MenuItem;

export const MenuCard = ({
  id,
  name,
  image,
  price,
  onMinus,
  onAdd,
}: MenuCardProps & { onMinus: any; onAdd: any }) => {
  const { orders } = useContext(GlobalContext).cartProvider;
  const menu = orders.find((item) => item.menuId === id);
  const amount = menu?.amount ?? 0;
  return (
    <div key={id} className={css["menu-card"]}>
      <h1>{name}</h1>
      <div>
        <img src={image} alt={image} width={160} />
      </div>

      <h3>{name}</h3>

      <p>{`ราคา : ${price} บาท`}</p>
      <div
        className="box-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CiCircleMinus
          className={css["icon"]}
          onClick={() => onMinus({ menuId: id })}
        />
        <p> {`จำนวนสินค้า : ${amount}`}</p>
        <CiCirclePlus
          className={css["icon"]}
          onClick={() => onAdd({ menuId: id })}
        />
      </div>
    </div>
  );
};
