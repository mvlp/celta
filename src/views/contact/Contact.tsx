import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(`n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container className="py-5 my-3">
      <Row>
        <Col>
          <h1 className="mb-4">Entre em contato</h1>
          <a
            href="mailto:marcos.vinicius@ufsj.edu.br"
            style={{
              color: "black",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <p>marcos.vinicius@ufsj.edu.br</p>
          </a>{" "}
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Assunto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o assunto do email"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Digite a mensagem"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
