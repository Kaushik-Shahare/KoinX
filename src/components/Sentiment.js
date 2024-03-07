import React, { useRef } from "react";

function Sentiment() {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="Sentiment Card cardLeft">
      <h1>Sentiment</h1>
      <div>
        <p>Key Events</p>
        <button onClick={() => scroll(-100)}>Scroll Left</button>
        <div
          ref={scrollContainer}
          className="d-flex flex-row flex-nowrap overflow-auto"
        >
          <div className="card mr-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">jhjsadhfkljsdagfsdaflahs</h1>
              <p className="card-text">
                ashhkhjfljkasfhjakfhaldf ljhfdjkhasdkjflhasd ljkhsdafjlshdakfl
                akshdflsha
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">
                slkdfsdlkafhlsda alkds flkjsha flsdha{" "}
              </h1>
              <p className="card-text">
                asfhashf saf sdaf sdaf sdafd f sda gf sda gfsd gfsd gsdfg sd
                gsdf
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">
                slkdfsdlkafhlsda alkds flkjsha flsdha{" "}
              </h1>
              <p className="card-text">
                asfhashf saf sdaf sdaf sdafd f sda gf sda gfsd gfsd gsdfg sd
                gsdf
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h1 className="card-title">
                slkdfsdlkafhlsda alkds flkjsha flsdha{" "}
              </h1>
              <p className="card-text">
                asfhashf saf sdaf sdaf sdafd f sda gf sda gfsd gfsd gsdfg sd
                gsdf
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => scroll(100)}>Scroll Right</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h1>Analyst Estimates</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          <div
            style={{
              backgroundColor: "#e6ffe6",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "12vh",
              height: "12vh",
              // flexGrow: 1,
            }}
          >
            <p style={{ fontSize: "30px" }}>72%</p>
          </div>
          <div style={{ marginLeft: "50px" }} className="d-flex flex-column">
            <div className="">
              <p>Buy</p>
              <div
                style={{
                  flex: 1,
                  height: "5px",
                  width: "100%",
                  background: `linear-gradient(to right, red ,yellow, lightgreen )`,
                  margin: " 10px",
                  position: "relative",
                }}
              ></div>
            </div>
            <div>
              <p>Hold</p>
              <div
                style={{
                  flex: 1,
                  height: "5px",
                  width: "100%",
                  background: `linear-gradient(to right, red ,yellow, lightgreen )`,
                  margin: " 10px",
                  position: "relative",
                }}
              ></div>
            </div>
            <div>
              <p>Sell</p>
              <div
                style={{
                  flex: 1,
                  height: "5px",
                  width: "100%",
                  background: `linear-gradient(to right, red ,yellow, lightgreen )`,
                  margin: " 10px",
                  position: "relative",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
