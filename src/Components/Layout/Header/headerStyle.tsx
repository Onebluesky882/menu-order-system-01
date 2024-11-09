import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export function HomeIcon() {
  return (
    <div
      style={{
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "#DF9E43",
        }}
        to={"/"}
      >
        <FaHome
          style={{
            display: "flex",
            position: "absolute",
            top: "10px",
            left: "150px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            color: "#D3A045",
            fontWeight: "normal",
            fontSize: "15px",
          }}
        >
          <u>หน้าหลัก</u>
        </p>
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <div>
      <img src={"/mmd_logo_1.png"} alt="logoname" style={{ height: 100 }} />
    </div>
  );
}

export function OrderList() {
  const { orders } = useContext(GlobalContext).cartProvider;

  let totalAmount = 0;
  orders.forEach((item) => (totalAmount += item.amount));

  return (
    <div>
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Link to={"/cart"}>
          <FaClipboardList
            className="remove-border-action"
            style={{ fontSize: "30", color: "#DF9E43" }}
          />
          <span
            style={{
              position: "absolute",
              top: "25px",
              left: "8px",
              fontSize: "14px",
              color: "#DF9E43",
              display: "flex",
              background: "white",
              borderRadius: "10px",
              padding: "3px",
              borderColor: "#F6F6F6",
              paddingRight: "2px",
              paddingLeft: "2px",
            }}
          >
            {totalAmount}
          </span>
        </Link>
      </div>
    </div>
  );
}
