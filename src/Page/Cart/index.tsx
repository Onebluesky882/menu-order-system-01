import ButtonCartOrder from "@/Components/ButtonOrderCart/ButtonCartOrder";
import {
  CartOrderContainer,
  CartOrderList,
} from "@/Components/CartOrderList/CartOrderCard";
import TableOrderCard from "@/Components/Cart/CartCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const { resetOrders, submitCart } = useContext(GlobalContext);
  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(orders.length > 0);
  }, [orders]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CartOrderContainer
        style={
          data
            ? {
                backgroundImage: "url(/bg1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
