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
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    // add this block
    return <div>Loading...</div>;
  }

  return (
    <div className="Middle d-flex">
      <div className="container">
        <p className="text-muted">Cryptocurrencies {">>"}Bitcoin</p>
        <CryptoDetail data={data} /> {/* modify this line */}
        <MiddleNavbar />
        <Performance data={data} /> {/* modify this line */}
        <Sentiment data={data} /> {/* modify this line */}
        <AboutBitcoin data={data} /> {/* modify this line */}
        <Tokenomics data={data} /> {/* modify this line */}
        <Team data={data} /> {/* modify this line */}
      </div>
      <div>
        <TrendingCoins data={data} /> {/* modify this line */}
        <TrendingCoins data={data} /> {/* modify this line */}
      </div>
    </div>
  );
}

export default Middle;
