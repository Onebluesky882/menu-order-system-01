import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MenuItem } from "@/types/MenuItem";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

export type MenuCardProps = MenuItem;

export const MenuCard = ({ id, image, name, price }: MenuCardProps) => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;

  const menuItem = orders.find((item) => item.menuId === id);
  const amount = menuItem?.amount ?? 0;

  return (
    <div key={id} className="menu-card">
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <div style={{ position: "relative" }}>
        <img style={{ ...imgStyle }} src={image} alt={image} width={160} />
      </div>
      <div style={{ position: "relative" }}>
        <h3>{name}</h3>
      </div>
      <p>{`ราคา : ${price} บาท`}</p>
      <div style={{ ...divOrder }}>
        <CiCircleMinus
          style={{ ...iconStyleLeft }}
          onClick={() => onMinus({ menuId: id })}
        />
        <p> {`จำนวนสินค้า : ${amount}`}</p>

        <CiCirclePlus
          style={{ ...iconStyleRight }}
          onClick={() => onAdd({ menuId: id })}
        />
      </div>
    </div>
  );
};

//styles
const imgStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const iconStyleLeft = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingRight: "20",
};

const iconStyleRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingLeft: "20",
};

const divOrder = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
