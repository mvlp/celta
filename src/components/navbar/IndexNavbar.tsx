//INSTALLATTION - npm install react-router-dom
// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

export default function IndexNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="Home">Marcos's site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="IndiceDeGovernanca">Indice de governança</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <NavDropdown title="Outros" id="basic-nav-dropdown">
              <NavDropdown.Item href="WIP">CAMP</NavDropdown.Item>
              <NavDropdown.Item href="WIP">HME</NavDropdown.Item>
              <NavDropdown.Item href="WIP">
                Portifólios eficientes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="WIP">UFSJ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
