import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import Cart from "./Page/Cart";
import NotFound from "./Page/notFoundPage.tsx";
import Table from "@/Page/Table";
import TableNo from "./Page/Table/TableNo";
import Orders from "./Page/Orders.tsx";
import TableOrder from "./Page/Orders.tsx/TableOrder.tsx";
import Menu from "./Page/Menu/index";
import Waiter from "./Page/Waiter.tsx";
import Promotions from "./Page/Promotions.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tables/" element={<Table />} />
          <Route path="/confirm-table-no" element={<TableNo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders/:tableNo" element={<TableOrder />} />
          <Route path="/orders/" element={<Orders />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
