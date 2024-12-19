import { MdOutlineRestaurantMenu } from "react-icons/md";
import css from "./Footer.module.css";

type MenuIconProps = {
  onSubmitMenu: () => void;
};

export const MenuIcon = ({ onSubmitMenu }: MenuIconProps) => {
  return (
    <div className={css.menuDiv} onClick={onSubmitMenu}>
      <MdOutlineRestaurantMenu
        color="white"
        size={40}
        className={css.restaurantIcon}
      />
    </div>
  );
};
