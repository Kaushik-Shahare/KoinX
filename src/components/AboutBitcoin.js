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
          style={{
            flex: 1,
            display: "flex",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            marginRight: "10px",
            backgroundColor:
              "linear-gradient(to bottom right, greenblue, redorange)",
          }}
        >
          <img
            src="../left.png"
            alt="Bitcoin"
            style={{ width: "50%", borderRadius: "10px" }}
          />
          <div>
            <h2>Card 1</h2>
            <button style={{ width: "100%", borderRadius: "10px" }}>
              Check Now
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            background:
              "linear-gradient(to bottom right, greenblue, redorange)",
          }}
        >
          <img
            src="path_to_your_other_image"
            alt="Bitcoin"
            style={{ width: "50%", borderRadius: "10px" }}
          />
          <div>
            <h2>Card 2</h2>
            <button style={{ width: "100%", borderRadius: "10px" }}>
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBitcoin;
