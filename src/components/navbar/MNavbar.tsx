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
import Governance from "../../views/data/Governance";
import HubPages from "../../views/data/HubPage";
import IndividualPage from "../../views/data/IndividualPage";
// import Dataset_CGVNTable from "../../views/IndexSections/DatasetCGVNTable";

import { TableInterface } from "../table/DataItens";
import Table from "../../assets/data/table.json";
export default function MNavbar() {
  // para fazer as paginas individuais funcionarem corretamente
  const groupedByCNPJ: { [cnpj: string]: TableInterface[] } = {};
  Table.forEach((item) => {
    if (!groupedByCNPJ[item.CNPJ_Companhia]) {
      groupedByCNPJ[item.CNPJ_Companhia] = [];
    }
    groupedByCNPJ[item.CNPJ_Companhia].push(item);
  });

  // posso fazer funções para resetar a navbar e trocar o estado da navbar automaticamente.
  // isso é melhor doq fazer várias arrow function ( () => {}) em cada Nav.link

  return (
    <BrowserRouter>
      <>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="light"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Marcos's site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav variant="underline">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Sobre
                </Nav.Link>
                <NavDropdown title="Pesquisas" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP">
                    Artigos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Dados" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="sitedeploy/governance">
                    Governança
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Outros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP">
                    Alunos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Time
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Projetos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/WIP">
                    UFSJ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/indice" element={<WIP />} />
            {/* <Route
              path="/sitedeploy/tabelaCGVN"
              element={<Dataset_CGVNTable />}
            />
            <Route path="/tabelaCGVN" element={<Dataset_CGVNTable />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/WIP" element={<WIP />} />
            <Route path="/sitedeploy/governance" element={<Governance />} />
            <Route path="/sitedeploy/" element={<Home />} />
            <Route path="/hub" element={<HubPages data={Table} />} />
            {Object.entries(groupedByCNPJ).map(([cnpj, items]) => (
              <Route
                key={cnpj}
                path={`/cnpj/${cnpj}`}
                element={<IndividualPage item={items} />}
              />
            ))}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
