import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import fapemigImage from "../../assets/img/nova_logo_eps.jpg";

import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

import serraImage from "../../assets/img/serra.png";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };
  return (
    <>
      <PageHeader
        headingText={"Welcome to Celta's Website"}
        bottomText="Research group at UFSJ"
        image={serraImage}
      />
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
            <Button variant="primary" onClick={handleButtonClick}>
              Learn More
            </Button>
          </Col>
          <Col>
            <Image src={fapemigImage} />
          </Col>
        </Row>
      </Container>
      <Footer headingText={"Celta's member:"} showEmail={true} />
    </>
  );
}
