import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Others.css';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

interface Project {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'completed' | 'planned';
    startDate: string;
    endDate?: string;
    funding?: string;
    participants: string[];
    link?: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'Nome do Projeto',
        description: 'Descrição detalhada do projeto de pesquisa.',
        status: 'active',
        startDate: '2024-01',
        participants: ['Participante 1', 'Participante 2'],
        funding: 'FAPEMIG',
        link: 'https://exemplo.com'
    }
    // Adicione mais projetos aqui
];

const Projects: React.FC = () => {
    const getStatusBadge = (status: Project['status']) => {
        switch (status) {
            case 'active':
                return <Badge bg="success">Em Andamento</Badge>;
            case 'completed':
                return <Badge bg="secondary">Concluído</Badge>;
            case 'planned':
                return <Badge bg="info">Planejado</Badge>;
            default:
                return null;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long'
        });
    };

    return (
        <>
            <PageHeader headingText="" image="" />
            <Container className="py-5">
                <h1 className="text-center mb-5">Projetos de Pesquisa</h1>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col key={project.id} xs={12} md={6}>
                            <Card className="h-100 project-card">
                                <Card.Body>
                                    <Card.Title className="project-title">
                                        {project.title}
                                        <div className="mt-2">
                                            {getStatusBadge(project.status)}
                                        </div>
                                    </Card.Title>

                                    <Card.Text className="project-description">
                                        {project.description}
                                    </Card.Text>

                                    <div className="project-details">
                                        <p>
                                            <strong>Início:</strong> {formatDate(project.startDate)}
                                        </p>
                                        {project.endDate && (
                                            <p>
                                                <strong>Conclusão:</strong> {formatDate(project.endDate)}
                                            </p>
                                        )}
                                        {project.funding && (
                                            <p>
                                                <strong>Financiamento:</strong> {project.funding}
                                            </p>
                                        )}
                                        <p>
                                            <strong>Participantes:</strong>
                                        </p>
                                        <ul className="project-participants">
                                            {project.participants.map((participant, index) => (
                                                <li key={index}>{participant}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Saiba mais
                                        </a>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer headingText="" showEmail={false} />
        </>
    );
};

export default Projects;
