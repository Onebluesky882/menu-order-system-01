import { GlobalContext } from "@/Hooks/GlobalContext";
import { HomeIcon, Logo, OrderList } from "./headerStyle";
import { useContext } from "react";

export default function Header() {
  const { table } = useContext(GlobalContext).tableProvider;
  return (
    <header className="header">
      <div>
        <HomeIcon />
        {table.tableNo}
      </div>
      <Logo />
      <OrderList />
      {/* <SidebarLeft />
      <SidebarRight /> */}
    </header>
  );
}
