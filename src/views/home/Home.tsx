import { Container, Row, Col, Image, Button } from "react-bootstrap";

import fapemigImage from "../../assets/img/nova_logo_eps.jpg";

import PageHeader from "../../components/pageheader/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader></PageHeader>
      <Container className="mb-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="text-start">
            <h1>Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet sem id risus posuere, vel mattis arcu viverra. Donec
              finibus ultricies metus ac interdum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet sem id risus posuere, vel mattis arcu viverra. Donec
              finibus ultricies metus ac interdum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet sem id risus posuere, vel mattis arcu viverra. Donec
              finibus ultricies metus ac interdum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquet sem id risus posuere, vel mattis arcu viverra. Donec
              finibus ultricies metus ac interdum.
            </p>
            <Button variant="primary">Learn More</Button>
          </Col>
          <Col>
            <Image src={fapemigImage} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
