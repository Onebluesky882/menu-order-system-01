import OrderTableCard from "@/Components/OrderTableCard";
import { TableCard, TableContainer } from "@/Components/Table/Tables";
import { table } from "@/Data/TableData";

const Orders = () => {
  const tablesLeftSide = table.filter((t) => t.position === "left");
  const tablesRightSide = table.filter((t) => t.position === "right");

  return (
    <div>
      <TableContainer>
        <TableCard position="ซ้าย">
          {tablesRightSide.map((p: { tableNo: string; status: string }) => (
            <OrderTableCard
              key={p.tableNo}
              nickname="จอน"
              status={p.status}
              tableNo={p.tableNo}
            />
          ))}
        </TableCard>
        <TableCard position="ขวา">
          {tablesLeftSide.map((p) => (
            <OrderTableCard
              key={p.tableNo}
              tableNo={p.tableNo}
              status={p.status}
              nickname={"มาลีน"}
            />
          ))}
        </TableCard>
      </TableContainer>
    </div>
  );
};
export default Orders;
