import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import css from "./SideBarItemBase.module.css";
export type MenuGroupProps = {
  name: string;
  img: string;
  position: "left" | "right";
};

export const SideBarItemBase = ({ name, img, position }: MenuGroupProps) => {
  const { setCategory } = useContext(GlobalContext).cartProvider;

  return (
    <div style={{ display: "flex" }}>
      <li
        className={`${
          position === "left"
            ? css["sidebar-item-left"]
            : css["sidebar-item-right"]
        }`}
        onClick={() => setCategory(name)}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
          }}
        >
          <img className={css["sidebar-image"]} src={img} width={30} />
          <p
            className={`${
              (css["sidebar-text"],
              position === "left"
                ? css["sidebar-text-left"]
                : css["sidebar-text-right"])
            }}}`}
          >
            {name}
          </p>
        </div>
      </li>
    </div>
  );
};
