import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./koinx_logo.png";

function NavBar() {
  return (
    <div className="Navbar">
      <Navbar bg="white" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="#cryptotaxes">Crypto Taxes</Nav.Link>
              <Nav.Link href="#freetools">Free Tools</Nav.Link>
              <Nav.Link href="#resourcecenter">Resource Center</Nav.Link>
              <button className="btn btn-primary">Get Started</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
