import React, { useState, useEffect } from "react";
import FooterCryptoOverview from "./FooterCryptoOverview";

function Footer({}) {
  return (
    <div className="Footer">
      <h1>You may also like</h1>
      <div className="d-flex flex-row">
        <FooterCryptoOverview crypto={"bitcoin"} />
        <FooterCryptoOverview crypto={"ethereum"} />
      </div>
      <h1>Trending Coins</h1>
      <div className="d-flex flex-row">
        <FooterCryptoOverview crypto={"bitcoin"} />
        <FooterCryptoOverview crypto={"ethereum"} />
      </div>
    </div>
  );
}

export default Footer;
