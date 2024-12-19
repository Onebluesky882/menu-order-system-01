import { OrderTables } from "@/Components/OrderTablesMapCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigator = useNavigate();
  const { tableOrder, loadOrderTableNo, setTableOrder } =
    useContext(GlobalContext).tableProvider;

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Order tables</h1>
      <OrderTables
        loadOrderTableNo={loadOrderTableNo}
        navigate={navigator}
        setTableOrder={() => setTableOrder(tableOrder)}
        // todo
        status={""}
      />
    </div>
  );
};
export default Orders;
