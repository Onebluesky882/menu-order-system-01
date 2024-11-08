import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

// const { cart } = useContext(GlobalContext).cartProvider;

export const TableNumber = ({ no }: { no: number }) => {
  return <p>{no}</p>;
};
