import { Container, Image } from "react-bootstrap";

import logoFapemig from "../../assets/img/nova_logo_eps.jpg";

export default function Fapemig() {
  return (
    <>
      <Container className="text-center my-3">
        <h2>Apoio</h2>
        <Image
          src={logoFapemig}
          style={{ width: "13%", height: "auto" }}
          fluid
        ></Image>
      </Container>
    </>
  );
}
