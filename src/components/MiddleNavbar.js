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
        <Nav.Link className="Nav" href="#overview">
          Overview
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#fundamentals">
          Fundamentals
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#news">
          News Insights
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#sentiments">
          Sentiments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#team">
          Team
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#technicals">
          Technicals
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="Nav" href="#tokenomics">
          Tokenomics
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MiddleNavbar;
