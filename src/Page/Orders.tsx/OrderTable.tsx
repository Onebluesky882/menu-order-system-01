import OrderTableCard from "@/Components/OrderTables/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";
import { useContext } from "react";

import { useNavigate, useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { tableOrder, tableObject } = useContext(GlobalContext).tableProvider;

  const { tableNoReOrder, table } = useContext(GlobalContext).tableProvider;
  const No = tableObject.find(
    (table) => table.tableNo === tableNo?.toUpperCase()
  );

  const navigator = useNavigate();
  const handleSubmit = () => {
    tableNoReOrder(No?.tableNo as Table["tableNo"]);
    navigator("/menu");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{tableNo?.toUpperCase()}</h2>
      {No?.customerName && (
        <h2
          style={{ textAlign: "center" }}
        >{`โต๊ะคุณ : ${No.customerName}`}</h2>
      )}
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
        <button onClick={handleSubmit}>Add more item</button>
        <button>Check the bill</button>
      </div>
    </div>
  );
};
export default OrderTable;
