import { useNavigate } from "react-router-dom";
import css from "./Table.module.css";
import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";

export const ConfirmTable = () => {
  const navigator = useNavigate();
  const { setConfirmTable, confirmSelectedTableNo } = useContext(GlobalContext);

  const { changeTableOnSubmit, customerName, setCustomerName } =
    useContext(GlobalContext).tableProvider;
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const confirmSubmit = async () => {
    await changeTableOnSubmit(
      customerName as Table["customerName"],
      confirmSelectedTableNo as Table["tableNo"]
    );

    setConfirmTable(false);
    navigator("/menu");
  };
  const cancelSubmit = () => {
    setConfirmTable(false);
  };

  const FieldName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCustomerName("");
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const regex = /^[a-zก-๛\s]*$/;
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      setValue(inputValue);
      setIsValid(inputValue.trim() !== "");
      setCustomerName(e.target.value);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className={css["overlay"]}>
      <div className={css["popup"]}>
        <h2>ยืนยันโต๊ะ {confirmSelectedTableNo} </h2>{" "}
        <form onSubmit={FieldName}>
          <div className={css.divInput}>
            <p>กรอกชื่อเล่น</p>
            <input
              required
              placeholder="e.g. ของขวัญ"
              name="name"
              type="text"
              className={css.input}
              onChange={handleOnchange}
            />
          </div>
          <div className={css.divButton}>
            <button onClick={cancelSubmit} className={css["button"]}>
              Cancel
            </button>
            <button
              onClick={confirmSubmit}
              className={css["button"]}
              disabled={!isValid}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
