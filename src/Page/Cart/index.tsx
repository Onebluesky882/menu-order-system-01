import ButtonCartOrder from "@/Components/ButtonCartOrder";
import { CartOrderCard } from "@/Components/CartOrderCard";
import TableOrderCard from "@/Components/Cart/CartCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const { resetOrders, submitCart } = useContext(GlobalContext);
  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;
  const [showButtonOrder, setShowButtonOrder] = useState(false);

  useEffect(() => {
    setShowButtonOrder(orders.length > 0);
  }, [orders]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {orders.map((order) => (
        <CartOrderCard
          key={order.menuId}
          order={order}
          onAdd={onAdd}
          onMinus={onMinus}
        />
      ))}
      {showButtonOrder && (
        <ButtonCartOrder resetOrders={resetOrders} submitCart={submitCart} />
      )}

      {tableOrders.map((order) => (
        <TableOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Cart;
