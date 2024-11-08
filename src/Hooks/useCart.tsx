import { CartOrder } from "@/types/Order";
import { useState } from "react";

export const useCart = () => {
  const [orders, setOrders] = useState<CartOrder[]>([]);

  const onAdd = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;

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
  return { orders, setOrders, onAdd, onMinus, submitCart, resetOrder };
};

export const defaultCartProvider = {
  orders: [],
  setOrders: () => null,
  onAdd: () => null,
  onMinus: () => null,
  submitCart: () => [],
  resetOrder: () => null,
};
