export const DefaultDisplayExample = () => {
  return (
    <div
      style={{
        display: "block",
        outline: "2px solid red",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: "250px",
          height: "50px",
          background: "yellow",
        }}
      >
        Menu: <span style={{ marginLeft: "24px" }}>Steak</span>
      </div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>

      {/* // --- */}
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
    </div>
  );
};

export const FlexExample = () => {
  return (
    <div
      style={{
        // display: "block",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        flexWrap: "wrap",
        justifyContent: "start",
        outline: "2px solid red",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>

      {/* // --- */}
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
    </div>
  );
};

export const GridExample = () => {
  return (
    <div
      style={{
        // display: "block",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        // flexDirection: "row",
        // alignItems: "end",
        justifyItems: "end",

        // flexWrap: "wrap",
        // justifyContent: "start",
        outline: "2px solid red",
        rowGap: "16px",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "150px",
          height: "30px",
          gridColumn: "2 / 4",
          // alignSelf: "end",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>

      {/* // --- */}
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "30px",
          height: "30px",
          background: "green",
          // marginRight: "50px",
        }}
      ></div>
      <div
        style={{
          // position: "absolute",
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
    </div>
  );
};

export const PositionExample = () => {
  return (
    <div style={{ background: "pink", position: "relative", height: "600px" }}>
      <div
        style={{
          position: "initial",
          width: "50px",
          height: "50px",
          background: "yellow",
        }}
      ></div>
      <div
        style={{
          position: "sticky",
          top: "50px",
          // bottom: "100%",
          // left
          // transform: "translateY(-50%)",
          // right: "0px",
          width: "150px",
          height: "30px",
          background: "green",
        }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "blue",
        }}
      ></div>
    </div>
  );
};
