import TableNoCard from "@/Components/Table/TableNoCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TableNo = () => {
  const { confirmSelectedTableNo: tableNo } = useContext(GlobalContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <div>
      <TableNoCard tableNo={tableNo ?? ""} />
    </div>
  );
};

export default TableNo;
``;
