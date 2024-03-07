import React from "react";

function GetStarted() {
  return (
    <div
      style={{ background: "blue" }}
      className="d-flex flex-column Card cardRight justify-content-center align-items-center"
    >
      <h1 style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
        Get Started with KoinX for Free
      </h1>
      <p style={{ color: "lightgrey", textAlign: "center" }}>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        style={{ height: "300px" }}
        src="/mobile 2 Background Removed.png"
        alt=""
      />
      <button
        style={{
          height: "40px",
          width: "60%",
          borderRadius: "5px",
          border: "none",
        }}
      >
        <a style={{}}>Get Started for free -></a>
      </button>
    </div>
  );
}

export default GetStarted;
