import { TableCard, TableContainer } from "@/Components/Table/Tables";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Table = () => {
  const { table } = useContext(GlobalContext).tableProvider;

  console.log("table  :", table.status);
  console.log("table  :", table.tableNo);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "10px 0px -10px 0px" }}>
        แผนที่โต๊ะอาหาร
      </h1>
      <TableCard status={table.status} clientName={""} />
    </>
  );
};

export default Table;
