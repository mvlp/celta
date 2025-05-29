import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Others.css';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    description: string;
    image?: string;
    email?: string;
    lattes?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Nome do Membro',
        role: 'Professor',
        description: 'Descrição do membro do time e suas responsabilidades.',
        image: '/team/default.jpg',
        email: 'email@ufsj.edu.br',
        lattes: 'http://lattes.cnpq.br/'
    }
    // Adicione mais membros aqui
];

const Team: React.FC = () => {
    return (
        <>
            {/* TODO: Adicionar props obrigatórias para PageHeader */}
            <PageHeader headingText="" image="" />
            <Container className="py-5">
                <h1 className="text-center mb-5">Time de Pesquisa</h1>

                <Row className="g-4">
                    {teamMembers.map((member) => (
                        <Col key={member.id} xs={12} md={6} lg={4}>
                            <Card className="h-100 team-card">
                                <Card.Body>
                                    <div className="text-center mb-3">
                                        <div className="team-image-placeholder">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="team-image"
                                                />
                                            ) : (
                                                <div className="team-initial">
                                                    {member.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Card.Title className="text-center team-name">
                                        {member.name}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">
                                        {member.role}
                                    </Card.Subtitle>
                                    <Card.Text className="team-description">
                                        {member.description}
                                    </Card.Text>
                                    <div className="team-links">
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="team-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-envelope"></i> Email
                                            </a>
                                        )}
                                        {member.lattes && (
                                            <a
                                                href={member.lattes}
                                                className="team-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="bi bi-file-earmark-text"></i> Lattes
                                            </a>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* TODO: Adicionar props obrigatórias para Footer */}
            <Footer headingText="" showEmail={false} />
        </>
    );
};

export default Team;
