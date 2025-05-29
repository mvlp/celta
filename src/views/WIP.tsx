import Container from "react-bootstrap/Container";
import PageHeader from "../components/pageheader/PageHeader";
import Footer from "../components/footer/Footer";

export default function WIP() {
  return (
    <>
      {/* TODO: Adicionar props obrigatórias para PageHeader */}
      <PageHeader headingText="" image="" />
      <Container>
        <h1>Work in progress...</h1>
      </Container>
      {/* TODO: Adicionar props obrigatórias para Footer */}
      <Footer headingText="" showEmail={false} />
    </>
  );
}
