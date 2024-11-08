export type CartOrder = {
  menuId: string;
  amount: number;
};

export type Order = {
  id: string;
  menuId: string;
  status: "ORDERED" | "COOKING" | "DONE";
  amount: number;
  createdAt: string;
  doneAt?: string;
};

export type OrderTable = Order & { tableNo: string };
