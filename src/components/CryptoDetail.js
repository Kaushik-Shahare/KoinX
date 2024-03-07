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
  const [dataGraph, setDataGraph] = useState(null);
  const [activeButton, setActiveButton] = useState("24");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${activeButton}`
      );
      const data = await response.json();
      setDataGraph(data);
    }

    fetchData();
  }, [activeButton]);

  // Filter data based on duration
  const filteredData = useMemo(() => {
    if (dataGraph && dataGraph.prices) {
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
      }[activeButton];
      return dataGraph.prices.filter(
        (price) => now - new Date(price[0]).getTime() <= durationInMilliseconds
      );
    }
    return [];
  }, [dataGraph, activeButton]);

  const chartData = {
    labels: filteredData.map((price) => new Date(price[0]).toLocaleString()),
    datasets: [
      {
        label: "Price in USD",
        data: filteredData.map((price) => price[1]),
        // backgroundColor: (context) => {
        //   const chart = context.chart;
        //   const { ctx, chartArea } = chart;

        //   if (!chartArea) {
        //     return "rgba(75, 192, 192, 0.2)"; // Return a default color if chartArea is not defined
        //   }

        //   const { top, bottom } = chartArea;
        //   const gradient = ctx.createLinearGradient(0, top, 0, bottom);
        //   gradient.addColorStop(0, "rgba(75, 192, 192, 1)");
        //   gradient.addColorStop(1, "rgba(75, 192, 192, 0.2)");

        //   return gradient;
        // },
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "blue",
        pointRadius: 0,
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
                setActiveButton("1");
              }}
            >
              1H
            </button>
            <button
              className={`graphButton ${activeButton === "24" ? "active" : ""}`}
              onClick={() => {
                setActiveButton("24");
              }}
            >
              24H
            </button>
            <button
              className={`graphButton ${activeButton === "7" ? "active" : ""}`}
              onClick={() => {
                setActiveButton("7");
              }}
            >
              7D
            </button>
            <button
              className={`graphButton ${activeButton === "30" ? "active" : ""}`}
              onClick={() => {
                setActiveButton("30");
              }}
            >
              1M
            </button>
            <button
              className={`graphButton ${activeButton === "90" ? "active" : ""}`}
              onClick={() => {
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
