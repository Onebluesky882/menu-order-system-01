import { MenuGroup } from "@/Data/TableData";

export type MenuProps = {
  submit: (cat: string) => void;
};

export const SideBarItemBase = ({
  name,
  img,
  position,
  submit,
}: MenuGroup & MenuProps) => {
  return (
    <div style={{ display: "flex" }}>
      <li
        style={{
          ...commonStyles[position],
          ...roundedStyles[position],
        }}
      >
        <div
          style={{ position: "relative", display: "flex" }}
          onClick={() => submit(name)}
        >
          <img style={imgStyles[position]} src={img} />
          <p style={textStyles[position]}>{name}</p>
        </div>
      </li>
    </div>
  );
};

export const roundedStyles: { [key: string]: React.CSSProperties } = {
  left: { borderTopRightRadius: "50px", borderBottomRightRadius: "50px" },
  right: { borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" },
};

export const imgStyles: { [key: string]: React.CSSProperties } = {
  left: {
    position: "absolute",
    left: "-30px",
    top: "-32px",
    width: "50px",
  },
  right: {
    position: "absolute",
    right: "-35px",
    top: "-42px",
    width: "50px",
  },
};
export const textStyles: { [key: string]: React.CSSProperties } = {
  left: {
    position: "absolute",
    left: "-30px",
    marginTop: "5px",
  },
  right: {
    position: "absolute",
    right: "-30px",
    marginTop: "8px",
  },
};
export const commonStyles: { [key: string]: React.CSSProperties } = {
  right: {
    listStyleType: "none",
    paddingTop: "60px",
    paddingBottom: "60px",
    paddingRight: "70px",
    paddingLeft: "40px",
    backgroundColor: "#f7e7bd",
    marginTop: "10px",
  },
  left: {
    listStyleType: "none",
    paddingTop: "60px",
    paddingBottom: "60px",
    paddingRight: "40px",
    paddingLeft: "40px",
    backgroundColor: "#f7e7bd",
    marginTop: "10px",
  },
};
