import { menuGroup } from "@/Data/MenuCategory";
import { SideBarItemLeft } from "./Layout/SidebarItem/SideBarItemLeft";
import { SideBarItemRight } from "./Layout/SidebarItem/SideBarItemRight";

export function SidebarLeft() {
  const leftMenuBar = menuGroup.filter((item) => item.position === "left");
  return (
    <div style={{ position: "fixed", top: "180px", left: "0px" }}>
      {leftMenuBar.map((menu) => (
        <SideBarItemLeft
          key={menu.id}
          name={menu.name}
          img={menu.img}
          position={"left"}
        />
      ))}
    </div>
  );
}

export function SidebarRight() {
  const rightMenuBar = menuGroup.filter((item) => item.position === "right");
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
          position={"right"}
        />
      ))}
    </div>
  );
}
