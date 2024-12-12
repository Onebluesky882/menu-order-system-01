import { TablesMap } from "@/Components/Table/Tables";
import { GlobalContext } from "@/Hooks/GlobalContext";

import { useContext } from "react";
const Table = () => {
  const { setConfirmTable, confirmTable } = useContext(GlobalContext);

  const { setConfirmSelectedTableNo } = useContext(GlobalContext).tableProvider;
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "10px 0px -10px 0px" }}>
        แผนที่โต๊ะอาหาร
      </h1>
      <TablesMap
        confirmTable={confirmTable}
        setConfirmSelectedTableNo={(tableNo) =>
          setConfirmSelectedTableNo(tableNo)
        }
        setConfirmTable={() => setConfirmTable(true)}
      />
    </>
  );
};

export default Table;
