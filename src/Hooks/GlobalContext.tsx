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
  showConfirmTable: boolean | null;
  setShowConfirmTable: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
  submitCart: () => null,
  resetOrders: () => null,
  confirmSelectedTableNo: null,
  setConfirmSelectedTableNo: () => null,
  setShowConfirmTable: () => null,
  showConfirmTable: null,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();

  const [confirmSelectedTableNo, setConfirmSelectedTableNo] = useState<
    string | null
  >(null);

  const [showConfirmTable, setShowConfirmTable] = useState<boolean | null>(
    null
  );

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
        setShowConfirmTable,
        showConfirmTable,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
