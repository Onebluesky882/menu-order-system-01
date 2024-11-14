import { useContext, useState } from "react";
import Menu from "@/Page/Menu";
import { ConfirmTable } from "./ConfirmTable";
import { useNavigate } from "react-router-dom";
import { Table } from "@/types/TableOrder";
import { GlobalContext } from "@/Hooks/GlobalContext";

const TableNoCard = ({ tableNo }: { tableNo: string }) => {
  const { submitTable } = useContext(GlobalContext).tableProvider;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  let navigate = useNavigate();

  const handleConfirm = async () => {
    setIsPopupOpen(false);
    await submitTable(tableNo as Table["tableNo"]);
    navigate(`/menu`);
    setIsPopupOpen(true);
  };

  const hadleCancel = () => {
    setIsPopupOpen(false);
    navigate(`/tables`);
  };

  return (
    <div>
      {" "}
      {!isPopupOpen && (
        <ConfirmTable
          message={"confirm to chose a table"}
          onConfirm={handleConfirm}
          onCancel={hadleCancel}
          isOpen={isPopupOpen}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", margin: " auto" }}></div>
        <div style={{ display: "flex", margin: "auto" }}></div>

        <div style={{ backgroundColor: "blue", display: "flex" }}></div>

        <Menu />
      </div>
    </div>
  );
};
export default TableNoCard;
