import { OrderTables } from "@/Components/OrderTables";

const Orders = () => {
  return (
    <div>
      <OrderTables
        confirmTable={false}
        setConfirmTable={() => {}}
        setConfirmSelectedTableNo={() => {}}
      />
    </div>
  );
};
export default Orders;
