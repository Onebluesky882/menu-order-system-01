import { SideBarItemBase } from "./SideBarItemBase";

export const SideBarItemRight = ({
  id,
  img,
  name,
  position,
  submit,
}: {
  id: any;
  img: any;
  name: any;
  position: any;
  submit: any;
}) => {
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
