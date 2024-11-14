import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <HomeIcon />
      <Logo />
      <OrderList />
    </header>
  );
}

export function HomeIcon() {
  return (
    <div>
      <Link to={"/"}>
        <FaHome style={{ fontSize: "35px", color: "#D5A154" }} />
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
      <Link to={"/cart"}>
        <FaClipboardList style={{ fontSize: "30", color: "#DF9E43" }} />
      </Link>
    </div>
  );
}
