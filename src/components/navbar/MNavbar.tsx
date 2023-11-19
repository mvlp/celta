import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "../../views/About";
import Contact from "../../views/Contact";
import WIP from "../../views/WIP";
import Home from "../../views/Home";

export default function MNavbar() {
  return (
    <BrowserRouter>
      <>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">Marcos's site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" variant="underline">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/indice">
                  Indice de governança
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <NavDropdown title="Outros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP">
                    CAMP
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    HME
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Portifólios eficientes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/WIP">
                    UFSJ
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/indice" element={<WIP />} />
            <Route path="/" element={<Home />} />
            <Route path="/WIP" element={<WIP />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
