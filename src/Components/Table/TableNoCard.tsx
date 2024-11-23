import Menu from "@/Page/Menu";

const TableNoCard = ({ tableNo }: { tableNo: string }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", margin: " auto" }}></div>
        <div style={{ display: "flex", margin: "auto" }}></div>
        <div style={{ backgroundColor: "blue", display: "flex" }}></div>
        <Menu />
      </div>
    </div>
  );
};
export default TableNoCard;
