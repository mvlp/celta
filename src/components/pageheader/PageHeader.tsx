import { Container, Row, Col } from "react-bootstrap";

import serraImage from "../../assets/img/serra.png";

// passar como prop a iamgem e o texto a ser exibido

interface HeaderProps {
  headingText: string;
  bottomText?: string;
  image: string;
}
export default function PageHeader({
  headingText = "Welcome to Marcos's Website",
  bottomText,
  image = serraImage,
}: HeaderProps) {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
        className="mb-5"
      >
        <Row className="h-100 justify-content-center align-items-center">
          <Col md={6} className="text-center text-white">
            <h1>{headingText}</h1>
            {bottomText && <h2>{bottomText}</h2>}
          </Col>
        </Row>
      </Container>
    </>
  );
}
