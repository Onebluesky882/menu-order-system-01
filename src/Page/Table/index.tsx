import { TableCard, TableContainer } from "@/Components/Table/Tables";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Table = () => {
  const { table } = useContext(GlobalContext).tableProvider;

  console.log("table  :", table.status);
  console.log("table  :", table.tableNo);
  return (
    <div>
      <TableContainer>
        <TableCard status={table.status} clientName={"เจน"} />
      </TableContainer>
    </div>
  );
};

export default Table;
