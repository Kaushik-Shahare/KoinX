import React, { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import ApexCharts from "apexcharts";

function FooterCryptoOverview({ crypto }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${crypto}`
      );
      let data = await response.json();

      if (data.tickers) {
        let filteredData = data.tickers.filter((tick, idx) => idx < 10);
        console.log(filteredData);
        data.tickers = filteredData;
        setData(data);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ width: "250px" }} className="Card">
      <div className="container">
        <div className="d-flex flex-row">
          <h1>
            <img
              srcSet={data && data.image && data.image.large}
              style={{
                height: "20px",
                marginRight: "5px",
              }}
            />
          </h1>
          <h1>
            <span style={{ fontSize: "0.6em", marginLeft: "10px" }}>
              {data && data.symbol && data.symbol.toUpperCase()}
            </span>
          </h1>
          <h1 style={{ marginTop: "10px", marginLeft: "10px" }}>
            <span>
              <div
                style={{
                  marginLeft: "1px",
                  fontSize: "0.6em",
                  width: "90px",
                  height: "30px",
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
                  Math.round(
                    data.market_data.price_change_percentage_24h * 100
                  ) / 100}
                %
              </div>
            </span>
          </h1>
        </div>
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
      </div>
    </div>
  );
}

export default FooterCryptoOverview;
