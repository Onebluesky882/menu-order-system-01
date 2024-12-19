import { useNavigate, useParams } from "react-router-dom";
import css from "./Footer.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { CheckOrder, Menu, Promotions, Tables } from "./FooterMenu";
import { MenuIcon } from "./MenuIcon";
import { Table } from "@/types/TableOrder";
import { CartMenuIcon } from "./CartMenuIcon";

const Footer = () => {
  const { tableNo } = useParams();
  const { tableObject, tableNoReOrder } =
    useContext(GlobalContext).tableProvider;
  const navigator = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const No = tableObject.find((t) => t.tableNo === tableNo?.toUpperCase());

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  const handleMenu = () => {
    if (!No?.tableNo) {
      alert("กรุณาเลือกโต๊ะที่นั่ง");
      navigator("/orders");
      setOpenMenu(false);
      return;
    }
    setOpenMenu((prev) => !prev);
  };

  const addMoreMenu = () => {
    if (No?.tableNo) {
      tableNoReOrder(No?.tableNo as Table["tableNo"]);
      navigator("/menu");
    }
  };

  return (
    <footer className={css["footer-style"]}>
      <div className={css["section"]}>
        <Promotions />
        <Tables />
        <Menu />
        <CheckOrder />
      </div>
      <div className={css.MenuIconBox}>
        <MenuIcon onSubmitMenu={handleMenu} />
        <CartMenuIcon />
      </div>
      {/* // todo move to file MenuIcon */}
      {openMenu && (
        <div className={css.menuPopupDiv}>
          <h3>
            {No?.tableNo}:{No?.customerName}
          </h3>
          <button onClick={addMoreMenu}>Add more item</button>
          // todo
          <button>Check the bill</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
