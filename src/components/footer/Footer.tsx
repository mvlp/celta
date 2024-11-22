import { Col, Container, Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

interface FooterProps {
  headingText: string;
  showEmail: boolean;
}

export default function Footer({
  headingText = "",
  showEmail = true,
}: FooterProps) {
  return (
    <Container
      fluid
      style={{
        backgroundSize: "cover",
        backgroundColor: "rgb(248, 249, 250)",
      }}
    >
      <Row className="mx-3">
        <Col className="mt-4">
          <h2>{headingText}</h2>
          {showEmail && (
            <a
              href=""
              style={{
                color: "black",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <p>marcos.vinicius@ufsj.edu.br</p>
            </a>
          )}
        </Col>
        <Col md={6} className="order-2 order-md-1 mt-4 text-center">
          <h2>Mapa do site</h2>
          <Navbar className="justify-content-center align-items-center">
            <Nav variant="underline" className="flex-column flex-md-row">
              <Col className="mx-5">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Sobre
                </Nav.Link>
              </Col>
              <Col className="mx-5">
                <Nav.Link as={Link} to="/WIP">
                  Artigos
                </Nav.Link>
                <Nav.Link as={Link} to="/governance">
                  Governança
                </Nav.Link>
              </Col>
              <Col className="mx-5">
                <Nav.Link as={Link} to="/WIP">
                  UFSJ
                </Nav.Link>

                <Nav.Link as={Link} to="/contact">
                  Contato
                </Nav.Link>
              </Col>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
