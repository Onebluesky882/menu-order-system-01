import { MenuGroup } from "@/Data/MenuCategory";
import { MenuProps, SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemLeft = ({
  id,
  img,
  name,
  position,
  submit,
}: MenuGroup & MenuProps) => {
  return (
    <SideBarItemBase
      id={id}
      name={name}
      img={img}
      position={position}
      submit={submit}
    />
  );
};
