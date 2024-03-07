import React, { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  // Use toLocaleDateString to format the date into "DD Month" format
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  });
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function CryptoDetail({ data }) {
  const [duration, setDuration] = useState("24h");
  const [activeButton, setActiveButton] = useState("24");

  // Filter data based on duration
  const filteredData = useMemo(() => {
    if (data && data.tickers) {
      const now = Date.now();
      const durationInMilliseconds = {
        1: 3600000,
        24: 86400000,
        7: 604800000,
        30: 2592000000,
        90: 7776000000,
        180: 15552000000,
        365: 31536000000,
        max: Infinity,
      }[duration];
      return data.tickers.filter(
        (tick) =>
          now - new Date(tick.timestamp).getTime() <= durationInMilliseconds
      );
    }
    return [];
  }, [data, duration]);

  const chartData = {
    labels: filteredData.map((tick) => formatTimestamp(tick.timestamp)),
    datasets: [
      {
        label: "Price in USD",
        data: filteredData.map((tick) => tick.last),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  useEffect(() => {
    // console.log(data.tickers)
    // console.log(data.tickers.map((tick=> console.log(tick.timestamp))))
    console.log(chartData);
  }, []);
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
            marginRight: "5px",
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
                : "#FFCCCC",
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
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Bitcoin Price Chart (USD)</h1>
          <div>
            <button
              className={`graphButton ${activeButton === "1" ? "active" : ""}`}
              onClick={() => {
                setDuration("1");
                setActiveButton("1");
              }}
            >
              1H
            </button>
            <button
              className={`graphButton ${activeButton === "24" ? "active" : ""}`}
              onClick={() => {
                setDuration("24");
                setActiveButton("24");
              }}
            >
              24H
            </button>
            <button
              className={`graphButton ${activeButton === "7" ? "active" : ""}`}
              onClick={() => {
                setDuration("7");
                setActiveButton("7");
              }}
            >
              7D
            </button>
            <button
              className={`graphButton ${activeButton === "30" ? "active" : ""}`}
              onClick={() => {
                setDuration("30");
                setActiveButton("30");
              }}
            >
              1M
            </button>
            <button
              className={`graphButton ${activeButton === "90" ? "active" : ""}`}
              onClick={() => {
                setDuration("90");
                setActiveButton("90");
              }}
            >
              3M
            </button>
            <button
              className={`graphButton ${
                activeButton === "180" ? "active" : ""
              }`}
              onClick={() => {
                setDuration("180");
                setActiveButton("180");
              }}
            >
              6M
            </button>
            <button
              className={`graphButton ${
                activeButton === "365" ? "active" : ""
              }`}
              onClick={() => {
                setDuration("365");
                setActiveButton("365");
              }}
            >
              1Y
            </button>
            <button
              className={`graphButton ${
                activeButton === "max" ? "active" : ""
              }`}
              onClick={() => {
                setDuration("max");
                setActiveButton("max");
              }}
            >
              ALL
            </button>
          </div>
        </nav>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
}

export default CryptoDetail;
