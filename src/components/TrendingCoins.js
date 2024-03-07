import React from "react";

function TrendingCoins({ data }) {
  return (
    <div className="TrendingCoins Card cardRight">
      <h1>TrendingCoins (24h)</h1>
      <div
        style={{ marginTop: "10px" }}
        className="d-flex justify-content-between"
      >
        <div>
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
                ? "#e6ffe6"
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
      <div
        style={{ marginTop: "10px" }}
        className="d-flex justify-content-between"
      >
        <div>
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
                ? "#e6ffe6"
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
      <div
        style={{ marginTop: "10px" }}
        className="d-flex justify-content-between"
      >
        <div>
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
                ? "#e6ffe6"
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
    </div>
  );
}

export default TrendingCoins;
