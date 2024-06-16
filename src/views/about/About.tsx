import { Container, Row, Col, Image } from "react-bootstrap";

import fapemigImage from "../../assets/img/nova_logo_eps.jpg";

import PageHeader from "../../components/pageheader/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader></PageHeader>;
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
