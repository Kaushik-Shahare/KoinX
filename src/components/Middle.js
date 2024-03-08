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
import GetStarted from "./GetStarted";

function Middle() {
  const [data, setData] = useState(null);

  // change the id to "bitcoin" or any other coin id
  const [id, setId] = useState("bitcoin");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
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
    <div className="Middle d-flex flex-column flex-lg-row flex-sm-column flwx-md-column">
      <div className="container col-lg-9">
        <p className="text-muted">
          Cryptocurrencies {">>"}{" "}
          {data && data.localization && data.localization.en}
        </p>
        <CryptoDetail data={data} />
        <MiddleNavbar />
        <Performance data={data} />
        <Sentiment data={data} />
        <AboutBitcoin data={data} />
        <Tokenomics data={data} />
        <Team data={data} />
      </div>
      <div className="container col-lg-3">
        <GetStarted />
        <TrendingCoins data={data} />
      </div>
    </div>
  );
}

export default Middle;
