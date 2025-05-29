import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

const About: React.FC = () => {
  return (
    <>
      {/* TODO: Adicionar props obrigatórias para PageHeader */}
      <PageHeader headingText="" image="" />
      <Container className="mt-5">
        <h1>Sobre Nós</h1>
        <p>Esta é a página sobre.</p>
      </Container>
      {/* TODO: Adicionar props obrigatórias para Footer */}
      <Footer headingText="" showEmail={false} />
    </>
  );
};

export default About;
