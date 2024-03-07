import React from "react";

function Performance({ data }) {
  const low = data.market_data.low?.usd;
  const high = data.market_data.high?.usd;
  const current = data.market_data.current_price?.usd;
  const percentage = ((current - low) / (high - low)) * 100;

  return (
    <div className="Performance Card cardLeft">
      <h1>Performance</h1>
      <div className="d-flex flex-column justify-content-between">
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <p>Today's Low{low}</p>
          <div
            style={{
              flex: 1,
              height: "5px",
              background: `linear-gradient(to right, red ,yellow, lightgreen )`,
              margin: "0 10px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${percentage}%`,
                top: 0,
                bottom: 0,
                width: "2px",
                background: "red",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: `${percentage}%`,
                transform: "translateX(-50%)",
                width: "10px",
                height: "10px",
                background: "red",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            >
              ${current}
            </div>
          </div>
          <p>Today's High: {high}</p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "95%" }}
        >
          <p>52W Low{low}</p>
          <div
            style={{
              flex: 1,
              height: "5px",
              background: `linear-gradient(to right, red ,yellow, lightgreen )`,
              margin: "0 10px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${percentage}%`,
                top: 0,
                bottom: 0,
                width: "2px",
                background: "red",
              }}
            ></div>
          </div>
          <p>52W High: {high}</p>
        </div>
        <div>
          <h1>Fundamentals</h1>
          {/* flexbox for outer div only work when on large screen */}
          <div
            style={{ gap: "10px" }}
            className="d-lg-flex justify-content-between"
          >
            <div style={{ width: "50%" }}>
              <div className="d-flex justify-content-between">
                <p>Bitcoin Price</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>24h Low/24h High</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>7d Low/7d High</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Trading Volume</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Market Cap Rank</p>
                <p>$40020</p>
              </div>
              <hr />
            </div>
            <div style={{ width: "50%" }}>
              <div className="d-flex justify-content-between">
                <p>Market Cap</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Market Cap Dominance</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Volume / Market Cap</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>All-Time High</p>
                <p>$40020</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>All-Time Low</p>
                <p>$40020</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
