import { menuList } from "@/Data/MenuCategory";
import { SideBarItemLeft } from "./Layout/SidebarItem/SideBarItemLeft";
import { SideBarItemRight } from "./Layout/SidebarItem/SideBarItemRight";
import { MenuProps } from "./Layout/SidebarItem/SideBarItemBase";

export function SidebarLeft({ submit }: MenuProps) {
  const leftMenuBar = menuList.filter((item) => item.position === "left");
  const handleSubmit = (cat: string) => {
    submit(cat);
  };
  return (
    <div style={{ position: "fixed", top: "180px", left: "0px" }}>
      {leftMenuBar.map((menu) => (
        <SideBarItemLeft
          key={menu.id}
          name={menu.name}
          img={menu.img}
          id={menu.id}
          position={menu.position}
          submit={handleSubmit}
        />
      ))}
    </div>
  );
}

export function SidebarRight({ submit }: MenuProps) {
  const handleSubmit = (cat: string) => {
    submit(cat);
  };
  const rightMenuBar = menuList.filter((item) => item.position === "right");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        position: "fixed",
        top: "180px",
        right: "0px",
      }}
    >
      {rightMenuBar.map((menu) => (
        <SideBarItemRight
          key={menu.id}
          name={menu.name}
          img={menu.img}
          id={menu.id}
          position={menu.position}
          submit={handleSubmit}
        />
      ))}
    </div>
  );
}
