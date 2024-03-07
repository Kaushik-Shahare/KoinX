import React, { useState, useEffect } from "react";

function Performance({ data }) {
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [current, setCurrent] = useState(data.market_data.current_price?.usd);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30"
    )
      .then((response) => response.json())
      .then((data) => {
        setLow(Math.min(...data.prices.map((price) => price[1])));
        setHigh(Math.max(...data.prices.map((price) => price[1])));
        setCurrent(data.market_data.current_price?.usd);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const percentage = low && high ? ((current - low) / (high - low)) * 100 : 0;

  return (
    <div id="fundamentals" className="Performance Card cardLeft">
      <h1>Performance</h1>
      <div className="d-flex flex-column justify-content-between">
        <div style={{}}>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%", marginTop: "20px" }}
          >
            <div style={{ textAlign: "left" }}>
              <p>Today's Low</p>
              <p>
                {Number(low).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

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
                  background: "black",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: `${percentage}%`,
                  transform: "translateX(-50%)",
                  width: "10px",
                  height: "10px",
                }}
              >
                &#9650; ${current}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p>Today's High: </p>
              <p>
                {Number(high).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
          >
            <div style={{ textAlign: "left" }}>
              <p>52W Low</p>
              <p>
                {Number(low).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div
              style={{
                flex: 1,
                height: "5px",
                background: `linear-gradient(to right, red ,yellow, lightgreen )`,
                margin: "0 10px",
                position: "relative",
              }}
            ></div>
            <div style={{ textAlign: "right" }}>
              <p>52W High</p>
              <p>
                {Number(high).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>Fundamentals</h1>
          {/* flexbox for outer div only work when on large screen */}
          <div
            style={{ gap: "100px" }}
            className="d-lg-flex justify-content-between"
          >
            <div style={{ width: "100%" }}>
              <div className="d-flex justify-content-between">
                <p>Bitcoin Price</p>
                <p>
                  $
                  {Number(current).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>24h Low/24h High</p>
                <p>
                  $
                  {Number(low).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  {" / "}$
                  {Number(high).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>7d Low/7d High</p>
                <p>
                  $
                  {Number(low).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  {" / "}$
                  {Number(high).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Trading Volume</p>
                <p>$23,249,202,782</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Market Cap Rank</p>
                <p>#{data.market_cap_rank}</p>
              </div>
              <hr />
            </div>
            <div style={{ width: "100%" }}>
              <div className="d-flex justify-content-between">
                <p>Market Cap</p>
                <p>$323,507,290,047</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Market Cap Dominance</p>
                <p>38.343%</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Volume / Market Cap</p>
                <p>0.0718</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>All-Time High</p>
                <p
                  style={{ textAlign: "right" }}
                  className="d-flex flex-column"
                >
                  <span>
                    $69,044.77 <span style={{ color: "red" }}>-75.6%</span>
                  </span>
                  <span>Nov 10, 2021(about 1 year)</span>
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>All-Time Low</p>
                <p
                  style={{ textAlign: "right" }}
                  className="d-flex flex-column"
                >
                  <span>
                    $67.81 <span style={{ color: "lightgreen" }}>24729.1%</span>
                  </span>
                  <span>Jul 06, 2013(over 9 year)</span>
                </p>
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
