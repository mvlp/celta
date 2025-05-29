import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";
import SerraImage from "../../assets/img/serra.png";


const Home: React.FC = () => {
  return (
    <>
      <PageHeader headingText="Bem vindo!" image={SerraImage} />
      <Container className="mt-5">
        <h1>Página Inicial</h1>
        <p>Bem-vindo à página inicial!</p>
      </Container>
      <Footer headingText="" showEmail={true} />
    </>
  );
};

export default Home;
