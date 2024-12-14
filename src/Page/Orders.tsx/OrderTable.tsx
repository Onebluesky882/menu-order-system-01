import css from "../../Components/OrderTablesMapCard/styles.module.css";
import OrderTableCard, {
  OrderTableNoContainer,
} from "@/Components/OrderTablesMapCard/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";
import { useContext } from "react";

import { useNavigate, useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { tableOrder, tableObject } = useContext(GlobalContext).tableProvider;

  const { tableNoReOrder } = useContext(GlobalContext).tableProvider;
  const No = tableObject.find(
    (table) => table.tableNo === tableNo?.toUpperCase()
  );

  const navigator = useNavigate();

  const handleSubmit = () => {
    if (No?.tableNo) {
      tableNoReOrder(No?.tableNo as Table["tableNo"]);
      navigator("/menu");
    }
  };
  if (!tableObject || !tableOrder) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ position: "relative" }}>
      <h2 style={{ textAlign: "center" }}>{tableNo?.toUpperCase()}</h2>
      {No?.customerName && (
        <h2
          style={{ textAlign: "center" }}
        >{`โต๊ะคุณ : ${No.customerName}`}</h2>
      )}

      <OrderTableNoContainer>
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
      </OrderTableNoContainer>
      <div className={css.buttonDiv}>
        {tableOrder.length > 0 && (
          <div>
            <button onClick={handleSubmit}>Add more item</button>
            <button>Check the bill</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default OrderTable;
