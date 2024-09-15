export default function GovernanceHeader() {
  return (
    <>
      <h1>Informe do Código de Governança (ICBGC)</h1>
      <p>
        O Informe do Código de Governança (ICBGC) é um documento eletrônico, de
        encaminhamento periódico previsto no artigo 32 da{" "}
        <a
          href="https://conteudo.cvm.gov.br/legislacao/resolucoes/resol080.html"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          Resolução CVM nº80
        </a>
        . A amostra contém 2293 documentos disponilizados do ICBGC, pertencentes
        a 494 empresas distintas (listadas e não listadas em bolsa de valores).
        A amostra compreende o período de Oct/2018 a Sep/2024.
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
        href="https://github.com/Yurovskyy/sitedeploy/raw/gh-pages/docs/dataset_CGVN.xlsx?download="
        style={{
          color: "black",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        <b>Base de dados processada (última atualização feita em 15/09/24)</b>
      </a>{" "}
    </>
  );
}
