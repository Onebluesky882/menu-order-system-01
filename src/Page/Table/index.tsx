import {
  TableCard,
  TableContainer,
  TablesMap,
} from "@/Components/Table/Tables";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Table = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  console.log("table", table);
  return (
    <div>
      <TableContainer>
        <TableCard status={table.status} clientName={""} />
      </TableContainer>
    </div>
  );
};

export default Table;
