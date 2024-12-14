import { useEffect, useRef, useState } from "react";
import css from "./styles.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
type OrderTableProps = {
  amount: number;
  status: "ORDERED" | "COOKING" | "DONE";
  createdAt: string;
  doneAt?: string;
  name: string;
  image: string;
};

const OrderTableNoCard = ({
  amount,
  status,
  doneAt,
  createdAt,
  name,
  image,
}: OrderTableProps) => {
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSecond = () => {
      setSecond((prevSecond) => prevSecond + 1);
    };

    intervalRef.current = setInterval(updateSecond, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={css.section}>
      <div className={css.div1}>
        <img src={image} alt="" width={50} />
        <p style={{ paddingLeft: "10px" }}>{name}</p>
      </div>
      <div className={css.div2}>
        <p>amount : {amount} </p>

        <p>
          Elapsed : {minutes}:{second}
        </p>
      </div>
      <div className={css.div3}>
        <p>status : {status}</p>
        <IoCloseCircleSharp color="#D27477" />
      </div>
    </div>
  );
};

export const OrderTableNoContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <div className={css.orderTableContainer}>
      <div className={css.grid}>{children}</div>
    </div>
  );
};

export default OrderTableNoCard;
