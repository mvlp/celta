import { useEffect, useState } from "react";
import bottom from "../../assets/headertext/info_date_dataset.txt";
import upper from "../../assets/headertext/info_ICBGC.txt";

export default function GovernanceHeader() {
  const [bottomContent, setBottomContent] = useState<string>("");
  const [upperContent, setUpperContent] = useState<string>("");

  useEffect(() => {
    fetch(bottom)
      .then((response) => response.text())
      .then((text) => setBottomContent(text))
      .catch((error) => console.error("Erro ao carregar o arquivo:", error));
  }, []);
  useEffect(() => {
    fetch(upper)
      .then((response) => response.text())
      .then((text) => setUpperContent(text))
      .catch((error) => console.error("Erro ao carregar o arquivo:", error));
  }, []);

  const [upperParts, setUpperParts] = useState<string[]>([]);

  useEffect(() => {
    // Processa o texto para dividi-lo em três partes
    const regex = /(.*)<a href="([^"]+)"[^>]*>(.*)<\/a>(.*)/; // Captura o texto antes, dentro e depois da tag <a>
    const matches = upperContent.match(regex);

    if (matches) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, part1, link, part2, part3] = matches;
      setUpperParts([part1.trim(), link.trim(), part2.trim(), part3.trim()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>Informe do Código de Governança (ICBGC)</h1>
      <p>
        {upperParts[0] + " "}
        <a href={upperParts[1]} target="_blank" style={{ cursor: "pointer" }}>
          {upperParts[2]}
        </a>
        {upperParts[3]}
      </p>
      <h2 className="mt-3">Fonte de dados</h2>
      <a
        href="https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/CGVN/DADOS/"
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Base de dados original
      </a>{" "}
      <div></div>
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/dataset_CGVN.xlsx?download="
        style={{
          color: "black",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        <b>{bottomContent}</b>
      </a>{" "}
    </>
  );
}
