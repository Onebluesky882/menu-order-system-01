import { useNavigate } from "react-router-dom";

type ButtonNavProps = {
  link: string;
  text: string;
  styles?: React.CSSProperties;
};
export const ButtonNav = ({ text, link, styles }: ButtonNavProps) => {
  const navigate = useNavigate();
  return (
    <button style={styles} onClick={() => navigate(link)}>
      {text}
    </button>
  );
};
