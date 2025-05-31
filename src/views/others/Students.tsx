import React from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import './Others.css';
import Footer from "../../components/footer/Footer";

interface Student {
    id: string;
    name: string;
    course: string;
    type: 'graduation_tcc' | 'scientific_initiation' | 'master' | 'phd';
    research: string;
    year?: number;
    orientador?: string;
    image?: string;
}

const students: Student[] = [
    {
        id: 'tcc_1',
        name: 'Filipe Nizatto Oliveira Araújo',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Análise do Mercado de Fundos de Investimento em Ações Brasileiros: Análise pré e pós crise de 2008',
        year: 2016,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_2',
        name: 'Itallo Guilherme Machado',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Rede Neural Artificial aplicada em um time de futebol simulado',
        year: 2016,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_3',
        name: 'Thaís Almeida Lopes',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Desenvolvimento de metodologia e automatização de ferramenta para análise do desenvolvimento de equipes',
        year: 2016,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_4',
        name: 'Daniel Bueno Ferraz',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Conversão de algoritmos de controle implementados em uma planta didática robótica',
        year: 2015,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_5',
        name: 'Fernando Henrique Oliveira Duarte',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Estudo e análise de protótipo de perna robótica',
        year: 2015,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_6',
        name: 'Thiago Gomes de Oliveira',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Aplicativo de análise e comparação de produtos em tempo real para dispositivos móveis',
        year: 2015,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_7',
        name: 'Sabrina de Sousa Silva',
        course: 'Engenharia Mecatrônica',
        type: 'graduation_tcc',
        research: 'Identificação da granulometria de fragmentos de rochas utilizando técnicas de processamento digital de imagens',
        year: 2014,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'tcc_8',
        name: 'Juliano Euflosino Rocha',
        course: 'Engenharia da Computação',
        type: 'graduation_tcc',
        research: 'Automação da Planta de Beneficiamento de Calcário da Unidade de Mineração de Pedra Bonita',
        year: 2008,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    },
    {
        id: 'ic_1',
        name: 'Janos Esteves Lisboa de Almeida',
        course: 'Engenharia Mecatrônica',
        type: 'scientific_initiation',
        research: 'O Prêmio Da Lucratividade No Mercado Acionário Brasileiro',
        year: 2022,
        orientador: 'Marcos Vinicius Lopes Pereira',
        image: '/students/default.jpg'
    }
];

const Students: React.FC = () => {
    const getStudentTypeLabel = (type: Student['type']) => {
        switch (type) {
            case 'graduation_tcc':
                return 'TCC (Graduação)';
            case 'scientific_initiation':
                return 'Iniciação Científica';
            case 'master':
                return 'Mestrado';
            case 'phd':
                return 'Doutorado';
            default:
                return '';
        }
    };

    return (
        <>
            <Container className="py-5">
                <h1 className="text-center mb-5">Alunos e Orientações</h1>

                <Row className="g-4">
                    {students.map((student) => (
                        <Col key={student.id} xs={12} md={6} lg={4}>
                            <Card className="h-100 student-card">
                                <Card.Body>
                                    <div className="text-center mb-3">
                                        <div className="student-image-placeholder">
                                            {student.image ? (
                                                <Image
                                                    src={student.image}
                                                    alt={student.name}
                                                    className="student-image"
                                                    fluid
                                                />
                                            ) : (
                                                <div className="student-initial">
                                                    {student.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <Card.Title className="text-center student-name">
                                        {student.name}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">
                                        {student.course} {student.year ? `(${student.year})` : ''}
                                    </Card.Subtitle>
                                    <Card.Text className="text-center">
                                        <Badge bg="primary" className="me-2">
                                            {getStudentTypeLabel(student.type)}
                                        </Badge>
                                    </Card.Text>
                                    <Card.Text className="student-research">
                                        <strong>Projeto/Trabalho:</strong> {student.research}
                                    </Card.Text>
                                    {student.orientador && (
                                        <Card.Text className="student-orientador">
                                            <strong>Orientador:</strong> {student.orientador}
                                        </Card.Text>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer headingText="Interessado em orientação?" showEmail={true} />
        </>
    );
};

export default Students;
