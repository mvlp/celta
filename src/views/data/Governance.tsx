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

import { Container, Row, Col, Button, ButtonGroup, Nav } from "react-bootstrap";
import Table from "../../assets/data/table.json";
import DownloadButton from "../../components/table/DownloadButton";

import { AgGridReact } from "ag-grid-react";

import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../components/table/headerClassCenter.css"

import { RespostasInterface } from "../../components/table/DataItens";
import {
  RespostasColumnConfig,
  RespostasColumnConfig2,
} from "../../components/table/DataItens";
import AC from "../../assets/data/tablefreq/table_freq_responses_1_AC.json";
import CA from "../../assets/data/tablefreq/table_freq_responses_2_CA.json";
import DR from "../../assets/data/tablefreq/table_freq_responses_3_DR.json";
import OFC from "../../assets/data/tablefreq/table_freq_responses_4_OFC.json";
import ECI from "../../assets/data/tablefreq/table_freq_responses_5_ECI.json";

export default function Governace() {
  const formatAndRound = (value: string) => {
    if (!value) return ""; // Verificar se o valor está vazio
    const numericValue = parseFloat(value.replace(",", ".")); // Converter para número
    if (isNaN(numericValue)) return ""; // Verificar se o valor é um número válido
    const roundedValue = Math.ceil(numericValue * 10) / 10; // Arredondar para cima com uma casa decimal
    return roundedValue.toFixed(1).replace(".", ","); // Arredondar para uma casa decimal e substituir ponto por vírgula
  };

  const roundValues = (data: RespostasInterface[]) => {
    return data.map((item) => {
      return {
        ...item,
        Não: formatAndRound(item.Não),
        "Não se Aplica": formatAndRound(item["Não se Aplica"] ?? ""),
        Parcialmente: formatAndRound(item.Parcialmente),
        Sim: formatAndRound(item.Sim),
      };
    });
  };

  const AC_rounded = roundValues(AC);
  const CA_rounded = roundValues(CA);
  const DR_rounded = roundValues(DR);
  const OFC_rounded = roundValues(OFC);
  const ECI_rounded = roundValues(ECI);

  const [ColumnDefs, setColumnDefs] = useState<ColDef[]>(RespostasColumnConfig);
  const [activeButton, setActiveButton] = useState(1);
  const [rowData, setRowData] = useState<RespostasInterface[]>(AC_rounded);
  const [showPraticasRecomendadas, setShowPraticasRecomendadas] =
    useState(true);

  const tableData: {
    [key: number]: RespostasInterface[];
  } = {
    1: AC_rounded,
    2: CA_rounded,
    3: DR_rounded,
    4: OFC_rounded,
    5: ECI_rounded,
  };

  const handleButtonClick = (tableIndex: number) => {
    setActiveButton(tableIndex);
    setRowData(tableData[tableIndex]);
  };
  const togglePraticasRecomendadas = () => {
    setShowPraticasRecomendadas(!showPraticasRecomendadas);
    setColumnDefs(
      showPraticasRecomendadas ? RespostasColumnConfig2 : RespostasColumnConfig
    );
  };

  return (
    <div>
      <Container>
        <h1>Indice de governança</h1>
        <p>Espaço para colocar o que quiser aqui</p>
        <p>Espaço para o grafico</p>
      </Container>

      <Container fluid>
        <ButtonGroup aria-label="Basic example">
          {[1, 2, 3, 4, 5].map((index) => (
            <Button
              key={index}
              variant="outline-secondary"
              active={activeButton === index}
              onClick={() => handleButtonClick(index)}
            >
              {`${index}.${
                [
                  "Acionistas",
                  "Conselho de Administração",
                  "Diretoria",
                  "Órgãos de Fiscalização e Controle",
                  "Ética e Conflitos de Interesse",
                ][index - 1]
              }`}
            </Button>
          ))}
          <Button
            variant="outline-secondary"
            onClick={togglePraticasRecomendadas}
          >
            {showPraticasRecomendadas
              ? "Ocultar Práticas Recomendadas"
              : "Mostrar Práticas Recomendadas"}
          </Button>
        </ButtonGroup>
      </Container>

      <Container fluid>
        <div className="ag-theme-alpine-dark">
          <AgGridReact
            rowData={rowData}
            columnDefs={ColumnDefs}
            domLayout="autoHeight"
          ></AgGridReact>
        </div>
      </Container>

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
    </div>
  );
}
