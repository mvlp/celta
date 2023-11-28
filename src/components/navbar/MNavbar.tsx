import { useState } from "react";
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
import CGVS from "../../views/CGVN";
import DownloadButton from "../table/DownloadButton";
import data1 from "../../assets/data/cgvn_cia_aberta_2023.json"

export default function MNavbar() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleCGVNClick = () => {
    setShowDownloadButton(true);
  };
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
            <Navbar.Brand as={Link} to="/">
              Marcos's site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" variant="underline">
                <Nav.Link as={Link} to="/" onClick={() => setShowDownloadButton(false)}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={() => setShowDownloadButton(false)}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/indice" onClick={() => setShowDownloadButton(false)}>
                  Indice de governança
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={() => setShowDownloadButton(false)}>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/cgvn" onClick={handleCGVNClick}>
                  CGVN
                </Nav.Link>
                <NavDropdown title="Outros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP" onClick={() => setShowDownloadButton(false)}>
                    CAMP
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP" onClick={() => setShowDownloadButton(false)}>
                    HME
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP" onClick={() => setShowDownloadButton(false)}>
                    Portifólios eficientes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/WIP" onClick={() => setShowDownloadButton(false)}>
                    UFSJ
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {showDownloadButton && (
                <Navbar.Text>
                  <DownloadButton jsonData={data1} />
                </Navbar.Text>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/indice" element={<WIP />} />
            <Route path="/cgvn" element={<CGVS />} />
            <Route path="/" element={<Home />} />
            <Route path="/WIP" element={<WIP />} />
            <Route path="/sitedeploy/" element={<Home />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
