import { createContext, useState } from "react";
import { useCart, defaultCartProvider } from "./useCart";
import { useTable, defaultTableProvider } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  tableProvider: ReturnType<typeof useTable>;
  submitCart: () => void;
  resetOrders: () => void;
  confirmSelectedTableNo: string | null;
  setConfirmSelectedTableNo: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
  submitCart: () => null,
  resetOrders: () => null,
  confirmSelectedTableNo: null,
  setConfirmSelectedTableNo: () => null,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();

  const [confirmSelectedTableNo, setConfirmSelectedTableNo] = useState<
    string | null
  >(null);

  const submitCart = () => {
    const submitOrders = cartProvider.submitCart();
    tableProvider.submitCart(submitOrders);
  };

  const resetOrders = () => {
    cartProvider.resetOrder();
  };

  return (
    <GlobalContext.Provider
      value={{
        cartProvider,
        tableProvider,
        submitCart,
        resetOrders,
        confirmSelectedTableNo,
        setConfirmSelectedTableNo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
