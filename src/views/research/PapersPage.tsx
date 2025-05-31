import React from 'react';
import { Container } from 'react-bootstrap';
import Papers from './Papers';
import Footer from '../../components/footer/Footer'; // Assumindo que você tem um Footer
import './Research.css'; // Arquivo CSS para estilização específica da página de Pesquisa/Artigos

const PapersPage: React.FC = () => {
    return (
        <>
            <Container className="mt-5 mb-5 page-content-container">
                <Papers />
            </Container>
            <Footer headingText="Entre em contato para colaborações" showEmail={true} />
        </>
    );
};

export default PapersPage; 
