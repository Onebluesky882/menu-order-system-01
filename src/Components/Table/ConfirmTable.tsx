import { useNavigate } from "react-router-dom";
import css from "./Table.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";

export const ConfirmTable = () => {
  const navigator = useNavigate();
  const { setConfirmTable, confirmSelectedTableNo } = useContext(GlobalContext);

  const { changeTableStatus } = useContext(GlobalContext).tableProvider;

  const confirmSubmit = async () => {
    await changeTableStatus(confirmSelectedTableNo as Table["tableNo"]);
    setConfirmTable(false);

    navigator("/menu");
  };

  const cancelSubmit = () => {
    setConfirmTable(false);
  };

  return (
    <div className={css["overlay"]}>
      <div className={css["popup"]}>
        <h1>ยืนยันโต๊ะ {confirmSelectedTableNo} </h1>{" "}
        <form>
          <div className={css.divInput}>
            <p>กรอกชื่อเล่น</p>
            <input
              placeholder="e.g. ของขวัญ"
              type="text"
              className={css.input}
            />
          </div>
          <div className={css.divButton}>
            <button onClick={cancelSubmit} className={css["button"]}>
              Cancel
            </button>
            <button onClick={confirmSubmit} className={css["button"]}>
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
