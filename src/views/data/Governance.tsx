// nesse arquivo ficarao os acionistas, conselho de administração, diretoria, orgãos de fiscalização e controle, ética e conflitos de interesse
// https://www.rad.cvm.gov.br/ENET/frmExibirCodigoGovernancaExt.aspx?NumeroSequencialDocumento=131713&CodigoInstituicao=1
// em baixo (ou em cima) dessa tabela, teremos o grafico
// no final da pagina, teremos um botão para ver a Tabela Dos Dados (general table), junto com o botão para baixar a mesma logo ao lado do botao para ver a mesma

//colocar texto explicativo aki
// colocar o grafico aki

//div
//div com 5 botoes, quando o botao for apertado, mostrar uma aggrid correspondente.
//div
//logo abaixo dessa div grande, colocar a Tabela dos Dados

import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Nav from "react-bootstrap/Nav";
import Table from "../../assets/data/table.json";
import DownloadButton from "../../components/table/DownloadButton";

export default function Governace() {
  const [activeButton1, setActiveButton1] = useState(false);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);
  const [activeButton4, setActiveButton4] = useState(false);
  const [activeButton5, setActiveButton5] = useState(false);

  const resetAll = () => {
    setActiveButton1(false);
    setActiveButton2(false);
    setActiveButton3(false);
    setActiveButton4(false);
    setActiveButton5(false);
  };

  return (
    <Container>
      <Stack>
        <h1>Indice de governança</h1>
        <p>Espaço para colocar o que quiser aqui</p>
        <p>Espaço para o grafico</p>
      </Stack>
      <Container>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="outline-secondary"
            active={activeButton1}
            onClick={() => {
              resetAll();
              setActiveButton1(true);
            }}
          >
            1.Acionistas
          </Button>
          <Button
            variant="outline-secondary"
            active={activeButton2}
            onClick={() => {
              resetAll();
              setActiveButton2(true);
            }}
          >
            2.Conselho de Administração
          </Button>
          <Button
            variant="outline-secondary"
            active={activeButton3}
            onClick={() => {
              resetAll();
              setActiveButton3(true);
            }}
          >
            3.Diretoria
          </Button>
          <Button
            variant="outline-secondary"
            active={activeButton4}
            onClick={() => {
              resetAll();
              setActiveButton4(true);
            }}
          >
            4.Órgãos de Fiscalização e Controle
          </Button>
          <Button
            variant="outline-secondary"
            active={activeButton5}
            onClick={() => {
              resetAll();
              setActiveButton5(true);
            }}
          >
            5.Ética e Conflitos de Interesse
          </Button>
        </ButtonGroup>
      </Container>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>

      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to="/tabeladosdados">
                  Link para a tabela dos dados
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md="auto">
            <DownloadButton jsonData={Table}></DownloadButton>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
