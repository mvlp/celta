import { Container, Row, Col } from "react-bootstrap";

import serraImage from "../../assets/img/serra.png";

// passar como prop a iamgem e o texto a ser exibido
export default function PageHeader() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${serraImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
        className="mb-5"
      >
        <Row className="h-100 justify-content-center align-items-center">
          <Col md={6} className="text-center text-white">
            <h1>Welcome to Marcos's Website</h1>
            <h2>Professor at UFSJ</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
