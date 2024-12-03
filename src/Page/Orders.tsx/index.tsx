import { OrderTables } from "@/Components/OrderTables";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigator = useNavigate();
  const { ordersTableNo, loadOrderTableNo, setOrdersTableNo } =
    useContext(GlobalContext).tableProvider;

  const countOrderTable = ordersTableNo.filter((item) => item.amount);
  const sumOrder = countOrderTable.forEach((item) => (item.amount += 1));

  console.log("sumOrder :", sumOrder);

  return (
    <div>
      <h1></h1>
      <OrderTables
        loadOrderTableNo={loadOrderTableNo}
        navigate={navigator}
        setOrdersTableNo={() => setOrdersTableNo(ordersTableNo)}
        status={" todo "}
        client={"todo"}
        ordersTableNo={countOrderTable}
      />
    </div>
  );
};
export default Orders;
