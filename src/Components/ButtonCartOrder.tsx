import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const ButtonCartOrder = () => {
  const { resetOrders, submitCart } = useContext(GlobalContext);

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <div style={{}}>
        <button
          style={{
            padding: "15px 25px 15px 25px",
            color: "#D4554E",
            borderStyle: "none",
            border: "0.5px solid #9FBAFB",
            marginTop: "10px",
            borderRadius: "10px 0px 0px 10px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={resetOrders}
        >
          reset
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "15px 25px 15px 25px",

            color: "#50895D",
            borderStyle: "none",
            border: "0.5px solid #9FBAFB",
            marginTop: "10px",
            borderRadius: "0px 10px 10px 0px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={submitCart}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default ButtonCartOrder;
