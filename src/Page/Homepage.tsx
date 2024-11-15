import { ButtonNav } from "@/Components/ui/ButtonNav";

const HomePage = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1>ร้านวันของฉัน</h1>
      <div
        style={{
          display: "flex",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid gray",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1>Promotions</h1>
      </div>

      <div>
        <ButtonNav
          text={"เลือกโต๊ะอาหาร"}
          link={"/tables"}
          styles={{ padding: "10px", borderRadius: "10px", margin: "10px" }}
        />
      </div>
    </div>
  );
};
export default HomePage;
