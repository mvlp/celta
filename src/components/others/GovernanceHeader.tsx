import { useEffect, useState } from "react";
import bottom from "../../assets/headertext/info_date_dataset.txt";
import upper from "../../assets/headertext/info_ICBGC.txt";

export default function GovernanceHeader() {
  const [bottomContent, setBottomContent] = useState<string>("");
  const [upperContent, setUpperContent] = useState<string>("");
  const [upperParts, setUpperParts] = useState<string[]>([]);

  // Carrega o conteúdo de "bottom"
  useEffect(() => {
    fetch(bottom)
      .then((response) => response.text())
      .then((text) => setBottomContent(text))
      .catch((error) =>
        console.error("Erro ao carregar o arquivo bottom:", error)
      );
  }, []);

  // Carrega o conteúdo de "upper"
  useEffect(() => {
    fetch(upper)
      .then((response) => response.text())
      .then((text) => setUpperContent(text))
      .catch((error) =>
        console.error("Erro ao carregar o arquivo upper:", error)
      );
  }, []);

  // Divide "upperContent" em partes somente após o conteúdo estar disponível
  useEffect(() => {
    if (upperContent) {
      const regex = /(.*)<a href="([^"]+)"[^>]*>(.*)<\/a>(.*)/; // Captura o texto antes, o link, o conteúdo da tag <a> e o restante
      const matches = upperContent.match(regex);

      if (matches) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, part1, link, part2, part3] = matches;
        setUpperParts([part1.trim(), link.trim(), part2.trim(), part3.trim()]);
      }
    }
  }, [upperContent]); // Atualiza apenas quando upperContent mudar
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
      <b>{bottomContent + " : "}</b>
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/dataset_CGVN.xlsx?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [Excel]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/dataset_CGVN.RData?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [R]
      </a>{" "}
      <h2 className="mt-3">Índices</h2>
      <b>
        {
          "Índices de Governança Corporativa (5 dimensões, variáveis correlacionadas) : "
        }
      </b>
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_05_dim_CG.xlsx?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [Excel]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_05_dim_CG.RData?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [R]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_05_dim_CG.sav?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [SPSS]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_05_dim_CG.dta?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [Stata]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_05_dim_CG.xpt?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [SAS]
      </a>{" "}
      <div></div>
      <b>
        {
          "Índices de Governança Corporativa (7 dimensões, variáveis não correlacionadas) : "
        }
      </b>
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_07_dim_CG.xlsx?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [Excel]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_07_dim_CG.RData?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [R]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_07_dim_CG.RData?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [SPSS]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_07_dim_CG.dta?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [Stata]
      </a>{" "}
      <a
        href="https://github.com/mvlp/celta/raw/refs/heads/main/public/docs/index_07_dim_CG.xpt?download="
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        [SAS]
      </a>{" "}
    </>
  );
}
