import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Container,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import fiveDim from "../../assets/data/cias/index_05_dim_CG.json";
import sevenDim from "../../assets/data/cias/index_07_dim_CG.json";
import fiveDimAvg from "../../assets/data/cias/index_05_dim_CG_avg.json";
import sevenDimAvg from "../../assets/data/cias/index_07_dim_CG_avg.json";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type fiveDimData = {
  CNPJ_Companhia: (string | null)[];
  Nome_Empresarial: string[];
  Ano_Referencia: number[];
  Mes_Referencia: (number | null)[];
  Ano_Entrega: (number | null)[];
  Mes_Entrega: (number | null)[];
  AC: number[];
  CA: number[];
  DR: number[];
  OFC: number[];
  ECI: number[];
};

type sevenDimData = {
  CNPJ_Companhia: (string | null)[];
  Nome_Empresarial: string[];
  Ano_Referencia: number[];
  Mes_Referencia: (number | null)[];
  Ano_Entrega: (number | null)[];
  Mes_Entrega: (number | null)[];
  CC: number[];
  REG: number[];
  ADM: number[];
  DIR: number[];
  SEM: number[];
  DEF: number[];
  FIS: number[];
};

type RadarChartProps = {
  companyKey: string;
  selectedYear: number;
  mergedData: fiveDimData[] | sevenDimData[];
  additionalData?: sevenDimData[];
  isAdditional?: boolean;
  showAverage?: boolean;
  averageData?: fiveDimData | sevenDimData;
};

const RadarChart: React.FC<RadarChartProps> = ({
  companyKey,
  selectedYear,
  mergedData,
  additionalData,
  isAdditional = false,
  showAverage = false,
  averageData,
}) => {
  const dataSet = isAdditional ? additionalData : mergedData;
  const company = dataSet?.find(
    (entry) => entry.CNPJ_Companhia[0] === companyKey
  );

  if (!company) return null;

  const yearIndex = company.Ano_Referencia.indexOf(selectedYear);
  if (yearIndex === -1) return null;

  const isAdditionalData = (
    data: fiveDimData | sevenDimData
  ): data is sevenDimData => {
    return (data as sevenDimData).CC !== undefined;
  };

  const isCompanyData = (
    data: fiveDimData | sevenDimData
  ): data is fiveDimData => {
    return (data as fiveDimData).AC !== undefined;
  };

  const data = {
    labels: isAdditional
      ? ["CC", "REG", "ADM", "DIR", "SEM", "DEF", "FIS"]
      : ["AC", "CA", "DR", "OFC", "ECI"],
    datasets: [
      {
        label: `${company.Nome_Empresarial[0]}`,
        data: isAdditional
          ? isAdditionalData(company)
            ? [
                company.CC[yearIndex],
                company.REG[yearIndex],
                company.ADM[yearIndex],
                company.DIR[yearIndex],
                company.SEM[yearIndex],
                company.DEF[yearIndex],
                company.FIS[yearIndex],
              ]
            : []
          : isCompanyData(company)
          ? [
              company.AC[yearIndex],
              company.CA[yearIndex],
              company.DR[yearIndex],
              company.OFC[yearIndex],
              company.ECI[yearIndex],
            ]
          : [],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      ...(showAverage && averageData
        ? [
            {
              label: `${averageData.Nome_Empresarial[0]}`,
              data: isAdditional
                ? isAdditionalData(averageData)
                  ? [
                      averageData.CC[yearIndex],
                      averageData.REG[yearIndex],
                      averageData.ADM[yearIndex],
                      averageData.DIR[yearIndex],
                      averageData.SEM[yearIndex],
                      averageData.DEF[yearIndex],
                      averageData.FIS[yearIndex],
                    ]
                  : []
                : isCompanyData(averageData)
                ? [
                    averageData.AC[yearIndex],
                    averageData.CA[yearIndex],
                    averageData.DR[yearIndex],
                    averageData.OFC[yearIndex],
                    averageData.ECI[yearIndex],
                  ]
                : [],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ]
        : []),
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
          showLabelBackdrop: false,
          // font: {
          //   size: 14,
          //   weight: "bold", // Alterado para um valor válido
          // },
          callback: function (value: string | number) {
            const numericValue =
              typeof value === "string" ? parseFloat(value) : value;
            return [0, 0.2, 0.4, 0.6, 0.8, 1].includes(numericValue)
              ? numericValue.toString()
              : "";
          },
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 700, // Alterado para um valor válido
          },
          color: "rgba(0, 0, 0, 0.8)", // Cor das labels ao redor
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [showAverage, setShowAverage] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelectCompany = (key: string) => {
    setSelectedCompany(key);
    setSearchTerm(
      fiveDim.find((entry) => entry.CNPJ_Companhia[0] === key)
        ?.Nome_Empresarial[0] || ""
    );
    setShowSuggestions(false);
    const mostRecentYear = Math.max(
      ...(fiveDim.find((entry) => entry.CNPJ_Companhia[0] === key)
        ?.Ano_Referencia || [])
    );
    setSelectedYear(mostRecentYear);
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  const filteredCompanies =
    searchTerm.length >= 3
      ? fiveDim.filter(
          (entry) =>
            entry.CNPJ_Companhia[0].includes(searchTerm) ||
            entry.Nome_Empresarial[0]
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">
        Perfil de Governança Corporativa: Análise por Empresa
      </h1>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Procure por nome ou CNPJ"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <DropdownButton
          variant="outline-secondary"
          title="Selecione"
          show={
            showSuggestions &&
            searchTerm.length >= 3 &&
            !!filteredCompanies.length
          }
          className="w-100"
        >
          {filteredCompanies.map((entry) => (
            <Dropdown.Item
              key={entry.CNPJ_Companhia[0]}
              onClick={() => handleSelectCompany(entry.CNPJ_Companhia[0])}
            >
              {entry.Nome_Empresarial[0]} ({entry.CNPJ_Companhia[0]})
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
      {selectedCompany && (
        <>
          <div className="d-flex justify-content-center mb-3">
            <Nav
              variant="tabs"
              activeKey={selectedYear ?? undefined}
              onSelect={(eventKey) => handleYearSelect(Number(eventKey))}
            >
              {fiveDim
                .find((entry) => entry.CNPJ_Companhia[0] === selectedCompany)
                ?.Ano_Referencia.map((year) => (
                  <Nav.Item key={year}>
                    <Nav.Link eventKey={year}>{year}</Nav.Link>
                  </Nav.Item>
                ))}
            </Nav>
          </div>

          {selectedYear && (
            <Row>
              <Col md={6} className="d-flex justify-content-center">
                <div style={{ width: "80%" }}>
                  <RadarChart
                    companyKey={selectedCompany}
                    selectedYear={selectedYear}
                    mergedData={fiveDim}
                    showAverage={true}
                    averageData={fiveDimAvg}
                  />
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <div style={{ width: "80%" }}>
                  <RadarChart
                    companyKey={selectedCompany}
                    selectedYear={selectedYear}
                    mergedData={[]}
                    additionalData={sevenDim}
                    isAdditional={true}
                    showAverage={true}
                    averageData={sevenDimAvg}
                  />
                </div>
              </Col>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default App;
