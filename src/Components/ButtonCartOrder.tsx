import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import css from "./style/ButtonCard.module.css";

const ButtonCartOrder = () => {
  const { resetOrders, submitCart } = useContext(GlobalContext);

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <div style={{}}>
        <button className={css["button"]} onClick={resetOrders}>
          reset
        </button>
      </div>
      <div>
        <button className={css["button"]} onClick={submitCart}>
          confirm
        </button>
      </div>
    </div>
  );
};

export default ButtonCartOrder;
