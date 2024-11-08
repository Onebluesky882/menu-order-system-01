import TableNoCard from "@/Components/Table/TableNoCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const TableNo = () => {
  const { confirmSelectedTableNo: tableNo } = useContext(GlobalContext);

  return (
    <div>
      <TableNoCard tableNo={tableNo ?? ""} />
    </div>
  );
};

export default TableNo;
