import OrderTableCard from "@/Components/OrderTables/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { ordersTableNo } = useContext(GlobalContext).tableProvider;

  return (
    <div>
      <h1>{tableNo}</h1>
      {ordersTableNo.map((item) => (
        <OrderTableCard
          key={item.id}
          amount={item.amount}
          status={"ORDERED"}
          createdAt={item.createdAt}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};
export default OrderTable;
