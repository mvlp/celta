import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import WIP from "../../views/WIP";
import Governance from "../../views/data/Governance";
import Students from "../../views/others/Students";
import Team from "../../views/others/Team";
import Projects from "../../views/others/Projects";
import Contact from "../../views/contact/Contact";
import Home from "../../views/home/Home";
import PapersPage from "../../views/research/PapersPage";
import About from "../../views/about/About";
import { TableInterface } from "../table/DataItens";
import Table from "../../assets/data/table.json";
import NotFound from "../../views/NotFound";

export default function MNavbar() {
  const [expanded, setExpanded] = useState(false);

  const groupedByCNPJ: { [cnpj: string]: TableInterface[] } = {};
  Table.forEach((item) => {
    if (!groupedByCNPJ[item.CNPJ_Companhia]) {
      groupedByCNPJ[item.CNPJ_Companhia] = [];
    }
    groupedByCNPJ[item.CNPJ_Companhia].push(item);
  });

  return (
    <HashRouter>
      <>
        <Navbar
          expand="lg"
          className="bg-body-tertiary shadow-sm"
          bg="light"
          data-bs-theme="light"
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">
              UFSJ
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="gap-2">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="nav-link-custom"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="nav-link-custom"
                >
                  Sobre
                </Nav.Link>
                <NavDropdown
                  title="Pesquisas"
                  id="research-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/WIP"
                    className="dropdown-item-custom"
                  >
                    Artigos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Dados"
                  id="data-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/governance"
                    className="dropdown-item-custom"
                  >
                    Governança
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Outros"
                  id="others-dropdown"
                  className="nav-link-custom"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/students"
                    className="dropdown-item-custom"
                  >
                    Alunos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/team"
                    className="dropdown-item-custom"
                  >
                    Time
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/projects"
                    className="dropdown-item-custom"
                  >
                    Projetos
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="nav-link-custom"
                >
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/indice" element={<WIP />} />
          <Route path="/" element={<Home />} />
          <Route path="/WIP" element={<PapersPage />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/sitedeploy/" element={<WIP />} />
          <Route path="/students" element={<Students />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </HashRouter>
  );
}
