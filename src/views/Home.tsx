import { Container, Row, Col, Image, Button } from "react-bootstrap";

import serraImage from "../assets/img/serra.png";
import fapemigImage from "../assets/img/nova_logo_eps.jpg";

export default function Home() {
  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(${serraImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Container fluid className="h-100">
          <Row className="h-100 justify-content-center align-items-center">
            <Col md={6} className="text-center text-white">
              <h1>Welcome to Marcos's Website</h1>
              <h2>Professor at UFSJ</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="text-center">
          <h1>Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            sem id risus posuere, vel mattis arcu viverra. Donec finibus
            ultricies metus ac interdum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut aliquet sem id risus posuere, vel mattis arcu
            viverra. Donec finibus ultricies metus ac interdum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut aliquet sem id risus
            posuere, vel mattis arcu viverra. Donec finibus ultricies metus ac
            interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut aliquet sem id risus posuere, vel mattis arcu viverra. Donec
            finibus ultricies metus ac interdum.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
        <Col>
          <Image src={fapemigImage} alt="Emmanuel Balogun" fluid />
        </Col>
      </Row>
    </Container>
  );
}
