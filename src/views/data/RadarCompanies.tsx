import React, { useState, useEffect } from "react";
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
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import companiesJson from "../../assets/data/cias/companies.json"; // Importando o primeiro JSON
import dataJson from "../../assets/data/cias/index_05_dim_CG.json"; // Importando o segundo JSON

// Ajustar o tipo de entrada para refletir o JSON real
type XlsxEntry = { cnpj: string; data: string[][] };

// Função para combinar os dados dos dois arquivos
const combineData = (
  companies: Record<string, string>,
  xlsxData: XlsxEntry[]
): Record<string, { nome: string; dados: string[][] }> => {
  const result: Record<string, { nome: string; dados: string[][] }> = {};

  xlsxData.forEach((entry) => {
    const companyName = companies[entry.cnpj] || "Desconhecido";
    result[entry.cnpj] = {
      nome: companyName,
      dados: entry.data, // Mantém como string[][]
    };
  });

  return result;
};

// inicio da configuração de exibição

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type CompanyData = {
  [key: string]: {
    nome: string;
    dados: string[][];
  };
};

type RadarChartProps = {
  companyKey: string;
  mergedData: CompanyData;
};

const RadarChart: React.FC<RadarChartProps> = ({ companyKey, mergedData }) => {
  const company = mergedData[companyKey];
  const dataPoints = company.dados.map((entry) =>
    entry.slice(-5).map((value) => parseFloat(value.replace(",", ".")))
  );

  const data = {
    labels: ["AC", "CA", "DR", "OFC", "ECI"],
    datasets: dataPoints.map((points, index) => ({
      label: `${company.nome} (${index + 1})`,
      data: points,
      backgroundColor: `rgba(54, 162, 235, ${0.2 + 0.1 * index})`,
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    })),
  };

  return <Radar data={data} />;
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [mergedData, setMergedData] = useState<Record<
    string,
    { nome: string; dados: string[][] }
  > | null>(null);

  useEffect(() => {
    const processFiles = async () => {
      try {
        // Lendo os arquivos JSON diretamente
        const companies = companiesJson;
        const xlsxData = dataJson;

        // Combinando os dados
        const combined = combineData(companies, xlsxData);
        setMergedData(combined);
      } catch (error) {
        console.error("Erro ao processar os arquivos:", error);
        alert(
          "Houve um erro ao processar os arquivos. Verifique os formatos e tente novamente."
        );
      }
    };

    processFiles();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelectCompany = (key: string) => {
    setSelectedCompany(key);
    setSearchTerm(mergedData ? mergedData[key].nome : "");
    setShowSuggestions(false);
  };

  const filteredCompanies = mergedData
    ? Object.entries(mergedData).filter(
        ([key, value]) =>
          key.includes(searchTerm) ||
          value.nome.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Comparativo de empresas</h1>
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
          title="Select"
          show={showSuggestions && !!searchTerm}
          className="w-100"
        >
          {filteredCompanies.map(([key, value]) => (
            <Dropdown.Item key={key} onClick={() => handleSelectCompany(key)}>
              {value.nome} ({key})
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
      {selectedCompany && mergedData && (
        <div className="d-flex justify-content-center">
          <div style={{ width: "60%" }}>
            <RadarChart companyKey={selectedCompany} mergedData={mergedData} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default App;
