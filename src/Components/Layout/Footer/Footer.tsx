import { useNavigate, useParams } from "react-router-dom";
import css from "./Footer.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import OrderBoxCard from "@/Components/OrderBoxCard";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CheckOrder, Menu, Promotions, Tables } from "./FooterMenu";
import { MenuIcon } from "./MenuIcon";
import { Table } from "@/types/TableOrder";

type FooterProps = {
  customerName: string;
  tableNo: string;
  onSubmitMenu: () => null;
};
const Footer = () => {
  const { tableNo } = useParams();
  const { tableObject, tableNoReOrder } =
    useContext(GlobalContext).tableProvider;
  const navigator = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const No = tableObject.find((t) => t.tableNo === tableNo?.toUpperCase());

  const handleMenu = () => {
    if (!No?.tableNo) {
      alert("กรุณาเลือกโต๊ะที่นั่ง");
      navigator("/orders");
      setOpenMenu(false);
      return;
    }
    setOpenMenu((prev) => !prev);
  };

  const addMoreMenu = () => {
    if (No?.tableNo) {
      tableNoReOrder(No?.tableNo as Table["tableNo"]);
      navigator("/menu");
    }
  };
  console.log("No?.tableNo  :", No?.tableNo);
  return (
    <footer className={css["footer-style"]}>
      <div className={css["section"]}>
        <Promotions />
        <Tables />
        <Menu />
        <CheckOrder />
      </div>
      <div className={css.MenuIconBox}>
        <MenuIcon onSubmitMenu={handleMenu} />
        <CheckMenuItem />
      </div>

      {openMenu && (
        <div>
          <h3>
            {No?.tableNo}:{No?.customerName}
          </h3>
          <button onClick={addMoreMenu}>Add more item</button>
          <button>Check the bill</button>
        </div>
      )}
    </footer>
  );
};

const CheckMenuItem = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const [popUp, setPopup] = useState(false);

  const totalAmount = orders.reduce((sum, item) => sum + item.amount, 0);

  const navigator = useNavigate();

  const handleSubmit = () => {
    if (orders.length > 0) {
      setPopup((prev) => !prev);
    }
  };

  useEffect(() => {
    setPopup(false);
  }, [location.pathname]);
  return (
    <div className={css["OrderBox"]}>
      <div onClick={handleSubmit} className={css.cartDiv}>
        <PiShoppingCartSimple
          color="white"
          size={42}
          className={css.iconCart}
        />
        <p className={css.p}>{totalAmount}</p>
      </div>

      {popUp && (
        <div className={css["cart-popup"]}>
          {orders.map((order) => (
            <OrderBoxCard
              key={order.menuId}
              order={order}
              onAdd={onAdd}
              onMinus={onMinus}
            />
          ))}
          <div className={css.buttonDiv}>
            <button className={css.button} onClick={() => navigator("/menu")}>
              ย้อนกลับ
            </button>
            <button className={css.button} onClick={() => navigator("/cart")}>
              ยืนยัน
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
