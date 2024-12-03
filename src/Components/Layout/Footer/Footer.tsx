import { FaClipboardList } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { MdTableBar } from "react-icons/md";
import css from "./Footer.module.css";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

const Footer = () => {
  return (
    <footer className={css["footer-style"]}>
      <div className={css["section"]}>
        <Promotions />
        <Tables />
        <Menu />
        <Waiter />
        <CheckOrder />
      </div>
    </footer>
  );
};

const Tables = () => {
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

const Menu = () => {
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

const Waiter = () => {
  return (
    <Link to="/waiter" className={css["link"]}>
      <ul className={css["ul"]}>
        <li>
          <PiCallBellFill />
        </li>
      </ul>
      Waiter
    </Link>
  );
};
const CheckOrder = () => {
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
const Promotions = () => {
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
export default Footer;
