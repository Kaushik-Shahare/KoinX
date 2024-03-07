import React, { useState, useEffect } from "react"; // import useState and useEffect
import "../App.css";
import CryptoDetail from "./CryptoDetail";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutBitcoin from "./AboutBitcoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import TrendingCoins from "./TrendingCoins";
import MiddleNavbar from "./MiddleNavbar";

function Middle() {
  const [data, setData] = useState(null); // add this line

  useEffect(() => {
    // add this block
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
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

  if (!data) {
    // add this block
    return <div>Loading...</div>;
  }

  return (
    <div className="Middle d-lg-flex">
      <div className="container">
        <p className="text-muted">Cryptocurrencies {">>"}Bitcoin</p>
        <CryptoDetail data={data} />
        <MiddleNavbar />
        <Performance data={data} />
        <Sentiment data={data} />
        <AboutBitcoin data={data} />
        <Tokenomics data={data} />
        <Team data={data} />
      </div>
      <div className="container">
        <TrendingCoins data={data} />
        <TrendingCoins data={data} />
      </div>
    </div>
  );
}

export default Middle;
