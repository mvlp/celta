import { Container, Row, Col, Image } from "react-bootstrap";

import fapemigImage from "../../assets/img/nova_logo_eps.jpg";

import PageHeader from "../../components/pageheader/PageHeader";

import Contact from "../contact/Contact";

import Footer from "../../components/footer/Footer";

import serraImage from "../../assets/img/serra.png";

export default function About() {
  return (
    <>
      <PageHeader
        headingText={"Welcome to Marcos's Website"}
        bottomText="Professor at UFSJ"
        image={serraImage}
      />
      ;
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
        <Contact
          headingText="Fale com Marcos"
          showEmail={false}
          showFooter={false}
        />
      </Container>
      <Footer headingText={"Marcos Vinícius"} showEmail={true} />
    </>
  );
}
