import css from "./style/ButtonCard.module.css";
import React from "react";

const ButtonCartOrder = ({
  resetOrders,
  submitCart,
}: {
  resetOrders: React.Dispatch<React.SetStateAction<any>>;
  submitCart: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div className={css["container"]}>
      <div>
        // todo
        <button className={css["button-reset"]} onClick={resetOrders}>
          reset
        </button>
      </div>
      <div>
        <button className={css["button-confirm"]} onClick={submitCart}>
          confirm
        </button>
      </div>
    </div>
  );
};

export default ButtonCartOrder;
