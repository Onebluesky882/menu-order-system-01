import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        userSelect: "none",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
