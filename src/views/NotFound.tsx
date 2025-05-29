import Container from "react-bootstrap/Container";
import PageHeader from "../components/pageheader/PageHeader";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <>
      {/* TODO: Adicionar props obrigatórias para PageHeader */}
      <PageHeader headingText="" image="" />
      <Container>
        <h1>Página não encontrada!</h1>
      </Container>
      {/* TODO: Adicionar props obrigatórias para Footer */}
      <Footer headingText="" showEmail={false} />
    </>
  );
}
