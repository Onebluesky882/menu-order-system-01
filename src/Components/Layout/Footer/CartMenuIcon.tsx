import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import css from "./Footer.module.css";
import OrderBoxCard from "@/Components/OrderBoxCard";
export const CartMenuIcon = () => {
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
