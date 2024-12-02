import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { ordersTableNo } = useContext(GlobalContext).tableProvider;

  return (
    <div>
      <h1>{tableNo}</h1>
      {ordersTableNo.map((item) => item.name)}
    </div>
  );
};
export default OrderTable;
