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
import TabelaGeral from "../../views/TabelaGeral";
import DownloadButton from "../table/DownloadButton";
import ResultItemData from "../../assets/data/tabela.json";

import TabelaIndividual from "../../views/TabelaIndividual";
import PaginaIndividual from "../empresa/PaginaIndividual";

export default function MNavbar() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleCGVNClick = () => {
    setShowDownloadButton(true);
  };
  // posso fazer funções para resetar a navbar e trocar o estado da navbar automaticamente.
  // isso é melhor doq fazer várias arrow function ( () => {}) em cada Nav.link
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
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => setShowDownloadButton(false)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => setShowDownloadButton(false)}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/indice"
                  onClick={() => setShowDownloadButton(false)}
                >
                  Indice de governança
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => setShowDownloadButton(false)}
                >
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/tabelageral" onClick={handleCGVNClick}>
                  Tabela Geral
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/tabelaindividual"
                  onClick={() => setShowDownloadButton(false)}
                >
                  Tabela Individual
                </Nav.Link>
                <NavDropdown title="Outros" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/WIP"
                    onClick={() => setShowDownloadButton(false)}
                  >
                    CAMP
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/WIP"
                    onClick={() => setShowDownloadButton(false)}
                  >
                    HME
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/WIP"
                    onClick={() => setShowDownloadButton(false)}
                  >
                    Portifólios eficientes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/WIP"
                    onClick={() => setShowDownloadButton(false)}
                  >
                    UFSJ
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {showDownloadButton && (
                <Navbar.Text>
                  <DownloadButton jsonData={ResultItemData} />
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
            <Route path="/tabelageral" element={<TabelaGeral />} />
            <Route path="/" element={<Home />} />
            <Route path="/WIP" element={<WIP />} />
            <Route path="/sitedeploy/" element={<Home />} />
            <Route
              path="/tabelaindividual"
              element={<TabelaIndividual data={ResultItemData} />}
            />
            {/* Defina uma rota para cada CNPJ */}
            {ResultItemData.map((item) => (
              <Route
                key={item.CNPJ_Companhia}
                path={`/cnpj/${item.CNPJ_Companhia}`}
                element={<PaginaIndividual {...item} />}
              />
            ))}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
