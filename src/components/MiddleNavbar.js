import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function MiddleNavbar() {
  const [activeKey, setActiveKey] = useState("#overview");
  return (
    <Nav
      className="justify-content-left mt-3"
      activeKey={activeKey}
      onSelect={setActiveKey}
    >
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#overview">
          Overview
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#fundamentals">
          Fundamentals
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#news">
          News Insights
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#sentiments">
          Sentiments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#team">
          Team
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#technicals">
          Technicals
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" eventKey="#tokenomics">
          Tokenomics
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MiddleNavbar;
