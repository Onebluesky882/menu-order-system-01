import { CartOrderCard } from "@/Components/CartOrderCard";
import { MenuCard } from "@/Components/menuCard/MenuCard";
import { SidebarLeft, SidebarRight } from "@/Components/Sidebar";
import { menu } from "../../Data/Menu";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useState } from "react";

const Menu = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const { orders } = useContext(GlobalContext).cartProvider;

  const [category, setCategory] = useState<string>("");

  const handleSubmit = (cat: string) => {
    setCategory(cat);
  };

  const menuFilter = menu.filter(
    (item) => item.category === category.toLocaleLowerCase()
  );

  return (
    <div>
      <h1>{table.tableNo}</h1>
      <h2 style={{ textAlign: "center" }}>
        รายการอาหาร
        {orders.map((i) => (
          <CartOrderCard order={i} />
        ))}
      </h2>
      <SidebarLeft submit={handleSubmit} />
      <SidebarRight submit={handleSubmit} />
      <div className="ProductCardContainer">
        {menuFilter.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            id={menu.id}
            category={menu.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
