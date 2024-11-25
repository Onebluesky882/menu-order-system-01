import { TablesMap } from "@/Components/Table/Tables";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Table = () => {
  const { table } = useContext(GlobalContext).tableProvider;

  const { setConfirmTable, setConfirmSelectedTableNo, confirmSelectedTableNo } =
    useContext(GlobalContext);

  const confirm = () => {
    if (table.status === "AVAILABLE") {
      setConfirmSelectedTableNo(table.tableNo);
      setConfirmTable(false);
    } else {
      alert("not available");
    }
  };
  console.log(table.tableNo);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "10px 0px -10px 0px" }}>
        แผนที่โต๊ะอาหาร
      </h1>
      <TablesMap />
    </>
  );
};

export default Table;
