import ButtonCartOrder from "@/Components/ButtonCartOrder";
import { CartOrderCard } from "@/Components/CartOrderCard";
import TableOrderCard from "@/Components/TableOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import Header from "../../Components/Layout/Header/index";

const Cart = () => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const { resetOrders, submitCart } = useContext(GlobalContext);
  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;

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
      <ButtonCartOrder resetOrders={resetOrders} submitCart={submitCart} />
      ที่สังไป
      {tableOrders.map((order) => (
        <TableOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Cart;
