import React from "react";

function Tokenomics() {
  return (
    <div id="tokenomics" className="Tokenomics Card cardLeft">
      <h1>Tokenomics</h1>

      <h1>Initial Distribution</h1>
      <div className="d-flex justify-content-left">
        <div style={{ position: "relative", width: "200px", height: "200px" }}>
          <div
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              background: "conic-gradient(blue 0% 80%, orange 80% 100%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              background: "#fff",
              borderRadius: "50%",
              top: "25%",
              left: "25%",
              width: "50%",
              height: "50%",
            }}
          ></div>
        </div>
        <div
          style={{ marginLeft: "50px" }}
          className="d-flex flex-column justify-content-center"
        >
          <p style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "-20px",
                top: "5px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "blue",
              }}
            ></span>
            Crowdsale investors: 80%
          </p>
          <p style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "-20px",
                top: "5px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "orange",
              }}
            ></span>
            Foundation: 20%
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Tokenomics;
