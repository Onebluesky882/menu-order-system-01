import { CartOrder } from "@/types/Order";
import { useState } from "react";
import useSoundAction from "./useSoundAction";
export const useCart = () => {
  const [orders, setOrders] = useState<CartOrder[]>([]);
  const [category, setCategory] = useState("");

  const { popSound, lipSound } = useSoundAction();

  const onAdd = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;

    lipSound();
    if (amount > 9) {
      return;
    }

    const newOrder = [...orders];
    if (amount === 0) {
      newOrder.push({
        menuId,
        amount: 1,
      });
      setOrders(newOrder);
      return;
    }

    const cartItem = newOrder.find((item) => item.menuId === menuId);
    if (cartItem) {
      cartItem.amount++;
    }
    setOrders(newOrder);
  };

  const onMinus = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const order = [...orders];

    popSound();
    const updatedOrders = order
      .map((item) =>
        item.menuId === menuId ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount > 0);

    setOrders(updatedOrders);
  };

  const submitCart = () => {
    const submitOrders = orders;
    setOrders([]);
    return submitOrders;
  };

  const resetOrder = () => {
    setOrders([]);
    return;
  };

  const submitMenubyCategory = (cat: string) => {
    return setCategory(cat);
  };

  return {
    orders,
    setOrders,
    onAdd,
    onMinus,
    submitCart,
    resetOrder,
    category,
    setCategory,
    submitMenubyCategory,
  };
};

export const defaultCartProvider = {
  orders: [],
  setOrders: () => null,
  onAdd: () => null,
  onMinus: () => null,
  submitCart: () => [],
  resetOrder: () => null,
  category: "",
  setCategory: () => null,
  submitMenubyCategory: () => null,
};
