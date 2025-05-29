import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import './Research.css';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

interface Paper {
    id: string;
    title: string;
    authors: string[];
    year: number;
    abstract: string;
    doi?: string;
    pdfUrl?: string;
}

const papers: Paper[] = [
    // Aqui você pode adicionar os artigos do professor
    {
        id: '1',
        title: 'Exemplo de Artigo Acadêmico',
        authors: ['Nome do Professor', 'Coautor 1', 'Coautor 2'],
        year: 2024,
        abstract: 'Este é um exemplo de resumo de artigo acadêmico. Aqui você pode adicionar o resumo real do artigo.',
        doi: 'https://doi.org/10.xxxx/xxxxx',
        pdfUrl: '/papers/exemplo.pdf'
    }
];

const Papers: React.FC = () => {
    return (
        <>
            <PageHeader headingText="" image="" />
            <Container className="py-5">
                <h1 className="text-center mb-5">Artigos Acadêmicos</h1>

                <Row className="g-4">
                    {papers.map((paper) => (
                        <Col key={paper.id} xs={12} md={6} lg={4}>
                            <Card className="h-100 paper-card">
                                <Card.Body>
                                    <Card.Title className="paper-title">{paper.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {paper.authors.join(', ')} • {paper.year}
                                    </Card.Subtitle>
                                    <Card.Text className="paper-abstract">
                                        {paper.abstract}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-top-0">
                                    <div className="d-flex gap-2">
                                        {paper.doi && (
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                href={paper.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                DOI
                                            </Button>
                                        )}
                                        {paper.pdfUrl && (
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                href={paper.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                PDF
                                            </Button>
                                        )}
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer headingText="" showEmail={false} />
        </>
    );
};

export default Papers;
