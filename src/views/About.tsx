import { Container, Row, Col, Image } from "react-bootstrap";

import serraImage from "../assets/img/serra.png";
import fapemigImage from "../assets/img/nova_logo_eps.jpg";

export default function About() {
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
      <Container className="mb-5">
        <Row className="justify-content-md-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            sem id risus posuere, vel mattis arcu viverra. Donec finibus
            ultricies metus ac interdum.
          </p>
          <Col xs={12} md={6} className="text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet sem id risus posuere, vel mattis arcu viverra. Donec
              finibus ultricies metus ac interdum.
            </p>
          </Col>
          <Col>
            <Image
              src={fapemigImage}
              style={{ width: "40%", height: "auto" }}
            />
          </Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            sem id risus posuere, vel mattis arcu viverra. Donec finibus
            ultricies metus ac interdum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            sem id risus posuere, vel mattis arcu viverra. Donec finibus
            ultricies metus ac interdum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            sem id risus posuere, vel mattis arcu viverra. Donec finibus
            ultricies metus ac interdum.
          </p>
        </Row>
      </Container>
    </>
  );
}
