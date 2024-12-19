import ButtonCartOrder from "@/Components/ButtonOrderCart/ButtonCartOrder";
import {
  CartOrderContainer,
  CartOrderList,
} from "@/Components/CartOrderList/CartOrderCard";
import TableOrderCard from "@/Components/Cart/CartCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";
import css from "./style.module.css";
const Cart = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const { resetOrders, submitCart } = useContext(GlobalContext);
  const { orders: tableOrders, table } =
    useContext(GlobalContext).tableProvider;
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(orders.length > 0);
  }, [orders]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className={css.h1}>รายการอาหารที่สั่ง</h2>
      <h2 className={css.h2}>
        {" "}
        โต๊ะ {table.tableNo} : คุณ{table.customerName}
      </h2>
      <CartOrderContainer
        style={
          data
            ? {
                backgroundImage: "url(/bg1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: "-1",
              }
            : ({} as React.CSSProperties)
        }
      >
        {orders.map((order) => (
          <CartOrderList
            key={order.menuId}
            order={order}
            onAdd={onAdd}
            onMinus={onMinus}
          />
        ))}
      </CartOrderContainer>
      {data && (
        <ButtonCartOrder resetOrders={resetOrders} submitCart={submitCart} />
      )}
      {tableOrders.map((order) => (
        <TableOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Cart;
