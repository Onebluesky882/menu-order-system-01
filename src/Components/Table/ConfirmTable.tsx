import { useNavigate } from "react-router-dom";
import css from "./Table.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";

export const ConfirmTable = () => {
  const navigator = useNavigate();
  const { showConfirmTable, setShowConfirmTable, confirmSelectedTableNo } =
    useContext(GlobalContext);

  const { changeTableStatus } = useContext(GlobalContext).tableProvider;

  const confirmSubmit = async () => {
    await changeTableStatus(confirmSelectedTableNo as Table["tableNo"]);
    console.log("confirmSelectedTableNo", confirmSelectedTableNo);
    navigator("/menu");
  };

  const cancelSubmit = () => {
    setShowConfirmTable(false);
    console.log("showConfirmTable :", showConfirmTable);
  };

  return (
    <div className={css["overlay"]}>
      <div className={css["popup"]}>
        <h1>ยืนยันโต๊ะ {confirmSelectedTableNo} </h1>

        <button onClick={cancelSubmit} className={css["button"]}>
          Cancel
        </button>
        <button onClick={confirmSubmit} className={css["button"]}>
          Confirm
        </button>
      </div>
    </div>
  );
};
