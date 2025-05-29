import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Others.css';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

interface Student {
    id: string;
    name: string;
    course: string;
    type: 'graduation' | 'master' | 'phd';
    research: string;
    image?: string;
}

const students: Student[] = [
    {
        id: '1',
        name: 'Nome do Aluno',
        course: 'Engenharia Mecatrônica',
        type: 'graduation',
        research: 'Título da Pesquisa',
        image: '/students/default.jpg'
    }
    // Adicione mais alunos aqui
];

const Students: React.FC = () => {
    const getStudentType = (type: Student['type']) => {
        switch (type) {
            case 'graduation':
                return 'Graduação';
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
            <PageHeader headingText="" image="" />
            <Container className="py-5">
                <h1 className="text-center mb-5">Alunos</h1>

                <Row className="g-4">
                    {students.map((student) => (
                        <Col key={student.id} xs={12} md={6} lg={4}>
                            <Card className="h-100 student-card">
                                <Card.Body>
                                    <div className="text-center mb-3">
                                        <div className="student-image-placeholder">
                                            {student.image ? (
                                                <img
                                                    src={student.image}
                                                    alt={student.name}
                                                    className="student-image"
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
                                        {student.course}
                                    </Card.Subtitle>
                                    <Card.Text className="text-center">
                                        <span className="badge bg-primary me-2">
                                            {getStudentType(student.type)}
                                        </span>
                                    </Card.Text>
                                    <Card.Text className="student-research">
                                        <strong>Pesquisa:</strong> {student.research}
                                    </Card.Text>
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

export default Students;
