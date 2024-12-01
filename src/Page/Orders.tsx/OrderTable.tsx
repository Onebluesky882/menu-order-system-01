import OrderTableCard from "@/Components/OrderTables/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { ordersTableNo } = useContext(GlobalContext).tableProvider;

  return (
    <div>
      <h1> </h1>
    </div>
  );
};
export default OrderTable;
