import { MenuItem } from "@/types/MenuItem";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import css from "./MenuCard.module.css";
import { useContext, useState } from "react";
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

  const [clickPlus, setClickPlus] = useState(false);
  const [clickMinus, setClickMinus] = useState(false);

  const handlePlus = () => {
    setClickPlus(true);
    onAdd({ menuId: id });
    setTimeout(() => {
      setClickPlus(false);
    }, 100);
  };

  const handleMinus = () => {
    setClickMinus(true);
    onMinus({ menuId: id });
    setTimeout(() => {
      setClickMinus(false);
    }, 100);
  };

  return (
    <div key={id} className={css["menu-card"]}>
      <img
        style={{ padding: "4px", borderRadius: "20px" }}
        src={image}
        alt={image}
        width={160}
      />

      <p>{name}</p>

      <p style={{ fontSize: "14px" }}>
        ราคา : <span style={{ fontSize: "18px" }}>{`${price}  `}</span>บาท
      </p>
      <div
        className="box-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {" "}
        {!clickMinus ? (
          <FaCircleMinus
            className={css["icon"]}
            size={30}
            onClick={handleMinus}
            style={{ color: "#89CE91" }}
          />
        ) : (
          <HiOutlineMinusCircle
            style={{ color: "white" }}
            size={30}
            className={css["icon"]}
          />
        )}
        <p> {`จำนวนสินค้า : ${amount}`}</p>
        {!clickPlus ? (
          <FaCirclePlus
            className={css["icon"]}
            size={30}
            onClick={handlePlus}
            style={{ color: "#89CE91" }}
          />
        ) : (
          <HiOutlinePlusCircle
            style={{ color: "white" }}
            size={30}
            className={css["icon"]}
          />
        )}
      </div>
    </div>
  );
};
