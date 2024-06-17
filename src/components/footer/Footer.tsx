import { Col, Container, Navbar, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

interface FooterProps {
  headingText: string;
  showEmail: boolean;
}

export default function Footer({
  headingText = "Marcos Vinícius",
  showEmail = true,
}: FooterProps) {
  return (
    <Container
      fluid
      style={{
        backgroundSize: "cover",
        backgroundColor: "gray",
      }}
    >
      <Row className="mx-3">
        <Col className="mt-5 text-center">
          <h1>{headingText}</h1>
          {showEmail && (
            <a
              href="mailto:marcos.vinicius@ufsj.edu.br"
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
        <Col md={6} className="order-2 order-md-1 mt-5 text-center">
          <h1>Mapa do site</h1>
          <Navbar className="justify-content-center align-items-center">
            <Nav variant="underline">
              <Col>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Sobre
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/WIP">
                  Artigos
                </Nav.Link>
                <Nav.Link as={Link} to="/governance">
                  Governança
                </Nav.Link>
              </Col>
              <Col>
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
