import { FaClipboardList } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdTableBar } from "react-icons/md";

const Footer = () => {
  return (
    <div className="div-container-nav">
      <div className="div-section-nav">
        <Link to="/tables" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <MdTableBar {...iconStyle} />
            </li>
            Tables
            <h1> </h1>
          </nav>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", display: "inline" }}>
          <nav style={{ ...navStyle }}>
            <span className="nav-span-order">
              <p
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background: "#ECC153",
                  padding: "3px",
                }}
              ></p>
            </span>
            <li style={{ listStyleType: "none" }}>
              <FaClipboardList {...iconStyle} />
            </li>
            Order
          </nav>
        </Link>
        <Link to="/waiter" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <PiCallBellFill {...iconStyle} />
            </li>
            Waiter
          </nav>
        </Link>{" "}
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <PiCallBellFill {...iconStyle} />
            </li>
            Check Order
          </nav>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
// nav styles
const navStyle = {
  paddingRight: "40px",
  paddingLeft: "45px",
  paddingTop: "10px",
  paddingBottom: "10px",
  color: "#C6723A",
  fontSize: "10px",
};

const iconStyle = {
  size: "30",
  color: "#E1B86F",
};
