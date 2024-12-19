import { MdTableBar } from "react-icons/md";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";
import { FaClipboardList } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

export const Tables = () => {
  return (
    <Link to="/tables" className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <MdTableBar />
        </li>
      </ul>
      Tables
    </Link>
  );
};

export const Menu = () => {
  return (
    <Link to="/menu" className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <FaClipboardList />
        </li>
      </ul>
      menu
    </Link>
  );
};

export const Promotions = () => {
  return (
    <Link to={"/promotions"} className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <PiCallBellFill />
        </li>
      </ul>
      Promotions
    </Link>
  );
};

export const CheckOrder = () => {
  const { setTableOrder } = useContext(GlobalContext).tableProvider;
  return (
    <Link
      to="/orders"
      className={css["link"]}
      onClick={() => {
        setTableOrder([]);
      }}
    >
      <ul className={css["ul"]}>
        <li>
          <PiCallBellFill />
        </li>
      </ul>
      Order Table
    </Link>
  );
};
