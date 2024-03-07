import React from "react";

function AboutBitcoin({ data }) {
  return (
    <div className="AboutBitcoin Card cardLeft">
      <h1>About Bitcoin</h1>
      <p>What is Bitcoin?</p>
      <p>
        Bitcoin is a decentralized digital currency, without a central bank or
        single administrator, that can be sent from user to user on the
        peer-to-peer bitcoin network without the need for intermediaries.
        Transactions are verified by network nodes through cryptography and
        recorded in a public distributed ledger called a blockchain. Bitcoin was
        invented in 2008 by an unknown person or group of people using the name
        Satoshi Nakamoto. The currency began use in 2009 when its implementation
        was released as open-source software.
      </p>
      <hr />
      <p>Description</p>
      {data && data.description && data.description.en && (
        <div dangerouslySetInnerHTML={{ __html: data.description.en }} />
      )}
      <hr />
      <h1>Already Holding Bitcoin?</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="aboutBitcoinCard"
          style={{
            display: "flex",
            background: "linear-gradient(to bottom right, #75E6DA, 	#088F8F)",
          }}
        >
          <img
            className="aboutBitcoinImage"
            src="/currency.jpeg"
            alt="Bitcoin"
            style={{ width: "50%", borderRadius: "10px" }}
          />
          <div>
            <h1 className="aboutBitcoinCardHeading">Calculate your Profits</h1>
            <button className="aboutBitcoinButton">Check Now -></button>
          </div>
        </div>
        <div
          className="aboutBitcoinCard"
          style={{
            display: "flex",
            background: "linear-gradient(to bottom right, #FFD580, #FF4500)",
          }}
        >
          <img
            className="aboutBitcoinImage"
            src="/Exchange.jpeg"
            alt="Bitcoin"
            style={{ width: "50%", borderRadius: "10px" }}
          />
          <div>
            <h1 className="aboutBitcoinCardHeading">
              Calculate your tax liability
            </h1>
            <button className="aboutBitcoinButton">Check Now -></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBitcoin;
