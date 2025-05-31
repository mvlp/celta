import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Contact.css';
import Footer from "../../components/footer/Footer";

interface ContactProps {
  headingText?: string;
  showEmail?: boolean;
  showFooter?: boolean;
}

const Contact: React.FC<ContactProps> = ({
  headingText = "Entre em Contato",
  showFooter = true
}) => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">{headingText}</h1>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="contact-card">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome completo"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Digite sua mensagem aqui..."
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="contact-button"
                    >
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      {showFooter && <Footer headingText={"Entre em contato"} showEmail={true} />}
    </>
  );
};

export default Contact;
