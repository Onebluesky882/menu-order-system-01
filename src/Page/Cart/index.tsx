import ButtonCartOrder from "@/Components/ButtonCartOrder";
import { CartOrderCard } from "@/Components/CartOrderCard";
import TableOrderCard from "@/Components/TableOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;

  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <div
        style={{
          margin: "0 auto",
          borderRadius: "16px",
          background: "blue",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "red",
            borderRadius: "28px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "green",
            }}
          ></div>
        </div>
      </div> */}
      {orders.map((order) => (
        <CartOrderCard key={order.menuId} order={order} />
      ))}
      <ButtonCartOrder />
      ที่สังไป
      {tableOrders.map((order) => (
        <TableOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Cart;
