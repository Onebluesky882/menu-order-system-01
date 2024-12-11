import OrderTableCard from "@/Components/OrderTables/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { tableOrder } = useContext(GlobalContext).tableProvider;

  return (
    <div>
      <h1>{tableNo}</h1>
      <h2>to do chage status update order when 'done'</h2>
      {tableOrder.map((item) => (
        <OrderTableCard
          key={item.id}
          amount={item.amount}
          status={"ORDERED"}
          createdAt={item.createdAt}
          name={item.name}
          image={item.image}
        />
      ))}
      <div>
        <button>Add more item</button>
        <button>Check the bill</button>
      </div>
    </div>
  );
};
export default OrderTable;
