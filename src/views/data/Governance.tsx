// nota de rodapé em baixo da tabela

// coisas adicionais para fazer
// 1. fazer RespostasColumnConfig3 para nao mostrar a aba Nao se aplica quando ela nao existir (2 e 3)
// 2. formatar o conteúdo de práticas recomendadas
// 3. nightmode

import { useState } from "react";

import {
  Container,
  Button,
  ButtonGroup,
  Col,
  Row,
  Image,
} from "react-bootstrap";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; //so ta mudando o texto, pois a tabela eu seto a config visual manualmente
import "../../assets/css/HeaderClassCenter.css";

import {
  RedirectToCGVNData,
  RespostasInterface,
} from "../../components/table/DataItens";
import {
  RespostasColumnConfig,
  RespostasColumnConfig2,
} from "../../components/table/DataItens";
import AC from "../../assets/data/tablefreq/table_freq_responses_1_AC.json";
import CA from "../../assets/data/tablefreq/table_freq_responses_2_CA.json";
import DR from "../../assets/data/tablefreq/table_freq_responses_3_DR.json";
import OFC from "../../assets/data/tablefreq/table_freq_responses_4_OFC.json";
import ECI from "../../assets/data/tablefreq/table_freq_responses_5_ECI.json";

import p1AC from "../../assets/data/graphs/p1_AC.svg";
import p2AC from "../../assets/data/graphs/p2_AC.svg";

import p1CA from "../../assets/data/graphs/p1_CA.svg";
import p2CA from "../../assets/data/graphs/p2_CA.svg";

import p1DR from "../../assets/data/graphs/p1_DR.svg";
import p2DR from "../../assets/data/graphs/p2_DR.svg";

import p1ECI from "../../assets/data/graphs/p1_ECI.svg";
import p2ECI from "../../assets/data/graphs/p2_ECI.svg";

import p1OFC from "../../assets/data/graphs/p1_OFC.svg";
import p2OFC from "../../assets/data/graphs/p2_OFC.svg";

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
  const [rowData, setRowData] = useState<RespostasInterface[]>(AC_rounded);
  const [activeButton, setActiveButton] = useState(1);
  const [showPraticasRecomendadas, setShowPraticasRecomendadas] =
    useState(true);
  const [image1, setImage1] = useState(p1AC);
  const [image2, setImage2] = useState(p2AC);

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
    switch (tableIndex) {
      case 1:
        setImage1(p1AC);
        setImage2(p2AC);
        break;
      case 2:
        setImage1(p1CA);
        setImage2(p2CA);
        break;
      case 3:
        setImage1(p1DR);
        setImage2(p2DR);
        break;
      case 4:
        setImage1(p1OFC);
        setImage2(p2OFC);
        break;
      case 5:
        setImage1(p1ECI);
        setImage2(p2ECI);
        break;
      default:
        break;
    }
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
        <h1>Índice de governança</h1>
        <p>
          Esta página fala sobre o índice de governaça. Para gerar essas tabelas
          e gráficos usamos{" "}
          <a
            onClick={RedirectToCGVNData}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            este
          </a>{" "}
          arquivo
        </p>
        <h2>Gráficos</h2>
        <Row>
          <Col>
            <Image src={image1} fluid></Image>
          </Col>
          <Col>
            <Image src={image2} fluid></Image>
          </Col>
        </Row>
        <h2>Tabelas</h2>
      </Container>

      <Container fluid>
        <ButtonGroup>
          {[1, 2, 3, 4, 5].map((index) => (
            <Button
              key={index}
              variant="success"
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
          <Button variant="success" onClick={togglePraticasRecomendadas}>
            {showPraticasRecomendadas
              ? "Ocultar Práticas Recomendadas"
              : "Mostrar Práticas Recomendadas"}
          </Button>
        </ButtonGroup>
      </Container>

      <Container fluid>
        <div className="ag-theme-balham">
          <AgGridReact
            rowData={rowData}
            columnDefs={ColumnDefs}
            domLayout="autoHeight"
          ></AgGridReact>
        </div>
      </Container>
    </div>
  );
}
