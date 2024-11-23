import { CartOrderCard } from "@/Components/CartOrderCard";
import { SidebarLeft, SidebarRight } from "@/Components/Sidebar";
import { menu } from "../../Data/Menu";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { MenuCard } from "@/Components/MenuCard";

const Menu = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const { category, orders, onAdd, onMinus } =
    useContext(GlobalContext).cartProvider;

  const menuFilter = menu.filter(
    (item) => item.category === category.toLocaleLowerCase()
  );
  console.log("table.tableNo : ", table.tableNo);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> โต๊ะ {table.tableNo}</h2>
      <div style={{ textAlign: "center" }}>
        {orders.map((i) => (
          <CartOrderCard
            order={i}
            onMinus={onAdd}
            onAdd={onMinus}
            key={i.menuId}
          />
        ))}
      </div>
      <SidebarLeft />
      <SidebarRight />
      <div className="ProductCardContainer">
        {menuFilter.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            id={menu.id}
            category={menu.category}
            onAdd={onAdd}
            onMinus={onMinus}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
