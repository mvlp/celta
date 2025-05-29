import React from 'react';
import { Container } from 'react-bootstrap';
import Papers from './Papers'; // Supondo que Papers.tsx esteja na mesma pasta

const PapersPage: React.FC = () => {
    return (
        <>
            <Container className="mt-5">
                <Papers />
            </Container>
        </>
    );
};

export default PapersPage; 
