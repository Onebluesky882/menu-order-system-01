import {
  TableCard,
  TableContainer,
  TablesMap,
} from "@/Components/Table/Tables";
import { table } from "@/Data/TableData";

const Table = () => {
  const tablesLeftSide = table.filter((t) => t.position === "left");
  const tablesRightSide = table.filter((t) => t.position === "right");
  return (
    <div>
      <TableContainer>
        <TableCard position="ซ้าย">
          {tablesRightSide.map((p) => (
            <TablesMap key={p.tableNo} tableNo={p.tableNo} status={p.status} />
          ))}
        </TableCard>
        <TableCard position="ขวา">
          {tablesLeftSide.map((p) => (
            <TablesMap key={p.tableNo} tableNo={p.tableNo} status={p.status} />
          ))}
        </TableCard>
      </TableContainer>
    </div>
  );
};

export default Table;
