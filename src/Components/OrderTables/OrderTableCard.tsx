import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const OrderTableCard = () => {
  const { orders } = useContext(GlobalContext).tableProvider;

  const a = orderTable.map((item) => item.id);
  console.log("ordersTable:", orderTable);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "blue",
        width: "50px",
      }}
    >
      <h1>hello</h1>
      <p>order id : </p>
      <p>name </p>
      <p>status </p>
      <p>amount </p>
      <p>order time : </p>
    </div>
  );
};
export default OrderTableCard;
