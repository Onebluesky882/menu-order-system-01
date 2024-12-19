import OrderTableCard, {
  OrderTableNoContainer,
} from "@/Components/OrderTablesMapCard/OrderTableCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

const OrderTable = () => {
  const { tableNo } = useParams();
  const { tableOrder, tableObject } = useContext(GlobalContext).tableProvider;

  const No = tableObject.find(
    (table) => table.tableNo === tableNo?.toUpperCase()
  );

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
    </div>
  );
};
export default OrderTable;
