import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function CryptoDetail({ data }) {
  const [duration, setDuration] = useState("24h");

  const chartData = {
    labels:
      data &&
      data.market_data &&
      data.market_data.sparkline_7d &&
      data.market_data.sparkline_7d.price.map((_, i) => i),
    datasets: [
      {
        label: "Price in USD",
        data:
          data &&
          data.market_data &&
          data.market_data.sparkline_7d &&
          data.market_data.sparkline_7d.price,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
  return (
    <div className="CryptoDetail Card cardLeft">
      {/* Heading */}
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <img
          srcSet={data && data.image && data.image.large}
          style={{
            height: "20px",
          }}
        />
        {data && data.localization && data.localization.en}{" "}
        <span style={{ fontSize: "0.6em", marginLeft: "10px" }}>
          {data && data.symbol && data.symbol.toUpperCase()}
        </span>
        <div
          style={{
            marginLeft: "30px",
            padding: "5px",
            border: "1px solid",
            borderRadius: "5px",
            backgroundColor: "gray",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            Rank #{data && data.market_data && data.market_data.market_cap_rank}
          </p>{" "}
        </div>
      </h1>

      {/* Pricing */}
      <div className="d-flex">
        <div style={{ marginLeft: "10px" }}>
          {" "}
          <h1>
            $
            {data &&
              data.market_data &&
              data.market_data.current_price &&
              data.market_data.current_price.usd &&
              data.market_data.current_price.usd.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
          </h1>
          <p style={{ fontSize: "10px" }}>
            ₹
            {data &&
              data.market_data &&
              data.market_data.current_price &&
              data.market_data.current_price.inr &&
              data.market_data.current_price.inr.toLocaleString(
                undefined,
                {}
              )}{" "}
          </p>
        </div>
        <div
          style={{
            marginLeft: "10px",
            height: "32px",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor:
              data &&
              data.market_data &&
              data.market_data.price_change_percentage_24h >= 0
                ? "lightgreen"
                : "#FFCCCC", // modify this line
            color:
              data &&
              data.market_data &&
              data.market_data.price_change_percentage_24h >= 0
                ? "green"
                : "darkred",
          }}
        >
          {data &&
          data.market_data &&
          data.market_data.price_change_percentage_24h >= 0
            ? "▲"
            : "▼"}{" "}
          {/* modify this line */}
          {data &&
            data.market_data &&
            Math.round(data.market_data.price_change_percentage_24h * 100) /
              100}
          %
        </div>
      </div>
      <hr />

      {/* Graph */}
      <div>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="1">1hr</option>
          <option value="1">24hr</option>
          <option value="7">7Day</option>
          <option value="30">1Month</option>
          <option value="90">3Month</option>
          <option value="180">6Month</option>
          <option value="365">1Year</option>
          <option value="max">All</option>
        </select>
      </div>
    </div>
  );
}

export default CryptoDetail;
