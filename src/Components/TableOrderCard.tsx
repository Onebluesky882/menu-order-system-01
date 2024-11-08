import { getMenuItem } from "@/Data/Menu";
import { Order } from "@/types/Order";

export type TableOrderCardProps = {
  order: Order;
};

const TableOrderCard = ({ order }: TableOrderCardProps) => {
  const menuItem = getMenuItem(order.menuId);
  const amount = order.amount;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "120%",
          backgroundAttachment: "fixed",
          backgroundColor: "#fff9e6",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "120%",
            display: "flex",
          }}
        >
          <div style={{ display: "flex", marginTop: "10px" }}>
            <img
              src={menuItem.image}
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                background: "white",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "30px",
              }}
            >
              <h3 style={{ fontSize: "25px", color: "#4B4E54" }}>
                {menuItem.name}
              </h3>
              <p style={{ color: "red", fontWeight: "bold" }}>
                {`฿${menuItem.price * amount}`}
              </p>

              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {order.status} {order.amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOrderCard;
