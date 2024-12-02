export type CartOrder = {
  menuId: string;
  amount: number;
};

export type Order = {
  id: string;
  menuId: string;
  status: "ORDERED" | "COOKING" | "DONE" | "REJECTED" | "CANCEL";
  amount: number;
  createdAt: string;
  doneAt?: string | "";
};

export type OrderTableNo = Order & {
  name: string;
  price: number;
  image: string;
  category: string;
};

export type OrderTable = Order & { tableNo: string };
