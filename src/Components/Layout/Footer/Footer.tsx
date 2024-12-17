import { FaClipboardList } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdTableBar } from "react-icons/md";
import css from "./Footer.module.css";
import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import OrderBoxCard from "@/Components/OrderBoxCard";
import { PiShoppingCartSimple } from "react-icons/pi";
const Footer = () => {
  return (
    <footer className={css["footer-style"]}>
      <div className={css["section"]}>
        <Promotions />
        <Tables />
        <Menu />
        <CheckOrder />
      </div>
      <OrderBox />
    </footer>
  );
};

const OrderBox = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const [click, setClick] = useState(false);

  const totalAmount = orders.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className={css["OrderBox"]}>
      <div style={{ position: "relative" }}>
        <PiShoppingCartSimple
          color="white"
          size={40}
          textAnchor="click"
          onClick={() => setClick((prev) => !prev)}
          className={css.icon}
        />
        <p
          style={{
            display: "block",
            color: "red",
            position: "absolute",
            transform: " translate(240%, -200%)",
          }}
        >
          {totalAmount}
        </p>
      </div>

      {click && (
        <div className={css["cart-popup"]}>
          {orders.map((order) => (
            <OrderBoxCard
              key={order.menuId}
              order={order}
              onAdd={onAdd}
              onMinus={onMinus}
            />
          ))}
          <button>reset</button>
          <button>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

const Tables = () => {
  return (
    <Link to="/tables" className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <MdTableBar />
        </li>
      </ul>
      Tables
    </Link>
  );
};

const Menu = () => {
  return (
    <Link to="/menu" className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <FaClipboardList />
        </li>
      </ul>
      menu
    </Link>
  );
};

const CheckOrder = () => {
  const { setTableOrder } = useContext(GlobalContext).tableProvider;
  return (
    <Link
      to="/orders"
      className={css["link"]}
      onClick={() => {
        setTableOrder([]);
      }}
    >
      <ul className={css["ul"]}>
        <li>
          <PiCallBellFill />
        </li>
      </ul>
      Order Table
    </Link>
  );
};
const Promotions = () => {
  return (
    <Link to={"/promotions"} className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <PiCallBellFill />
        </li>
      </ul>
      Promotions
    </Link>
  );
};
export default Footer;
