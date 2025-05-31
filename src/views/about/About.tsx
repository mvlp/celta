import React from 'react';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import Footer from "../../components/footer/Footer";
import PageHeader from '../../components/pageheader/PageHeader';
import { Link } from 'react-router-dom';

const professorInfo = {
  nomeCompleto: "Prof. Dr. Marcos Vinicius Lopes Pereira",
  tituloProfissional: "Professor Adjunto",
  fotoUrl: "/images/marcos_pereira_profile.jpg",
  universidade: "Universidade Federal de São João Del-Rei (UFSJ)",
  campus: "Campus Alto Paraopeba",
  departamento: "Departamento das Engenharias de Telecomunicação e Mecatrônica (DETEM)",
  lattes: "http://lattes.cnpq.br/1294789533388093",
  email: "marcos.vinicius@ufsj.edu.br",
  sobreMimTextoLongo: `Possui graduação em Engenharia de Controle e Automação (2003), mestrado em Engenharia Elétrica (2006) e doutorado em Administração (2020), todas essas formações obtidas na Universidade Federal de Minas Gerais (UFMG). Atualmente, é professor adjunto na Universidade Federal de São João Del-Rei (UFSJ), lotado no Campus Alto Paraopeba, onde leciona principalmente para os cursos de Engenharia Mecatrônica e Engenharia de Telecomunicações.\n\nCom uma sólida experiência na área de Engenharia de Controle e Automação, suas principais áreas de interesse e pesquisa incluem: controle de processos industriais, uma área vital para a eficiência e segurança na indústria; processamento de sinais, fundamental para extrair informações úteis de dados ruidosos; identificação de sistemas dinâmicos, que permite modelar e prever o comportamento de sistemas complexos; otimização de sistemas, buscando sempre a melhor performance e alocação de recursos; e inteligência computacional, com foco em redes neurais e sistemas nebulosos, para desenvolver soluções adaptativas e inteligentes para problemas desafiadores.\n\nÉ membro ativo do CELTA - Centro de Estudos em Engenharia Eletrônica e Automação, um grupo de pesquisa multidisciplinar dedicado ao avanço em áreas como controle, robótica, computação, modelagem matemática, eletrônica aplicada e visão computacional. Além disso, integra o NUFI - Núcleo de Ensino, Pesquisa e Consultoria em Finanças e Contabilidade, vinculado ao Departamento de Ciências Administrativas (CAD) e ao Centro de Pós-Graduação e Pesquisas em Administração (CEPEAD) da Faculdade de Ciências Econômicas (FACE) da UFMG, demonstrando a interdisciplinaridade de sua atuação.`,
  citacaoDestaque: "A aplicação da inteligência computacional e das técnicas avançadas de controle e otimização é fundamental para impulsionar a inovação e a eficiência nos sistemas de engenharia.",
  areasDeInteresse: [
    "Controle de processos industriais",
    "Processamento de sinais",
    "Identificação de sistemas dinâmicos",
    "Otimização de sistemas",
    "Inteligência computacional (redes neurais e sistemas nebulosos)",
    "Engenharia Mecatrônica",
    "Engenharia de Telecomunicações"
  ]
};

const About: React.FC = (): JSX.Element => {
  // Função para converter quebras de linha em parágrafos HTML
  const formatTextToHtml = (text: string) => {
    const paragraphs = text.split(/\n\n+/);
    return paragraphs.map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`).join('');
  };

  return (
    <>
      <PageHeader headingText="Publicações" image="/images/header_pesquisa.jpg" /> {/* Exemplo de imagem e título */}
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-5 fw-bold text-center mb-5">{`Sobre o ${professorInfo.nomeCompleto}`}</h1>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image
              src={professorInfo.fotoUrl}
              alt={`Foto de ${professorInfo.nomeCompleto}`}
              fluid
              rounded
              style={{ border: '5px solid #eee' }}
            />
          </Col>
          <Col md={8}>
            <h2 className="h3 fw-bold">{professorInfo.tituloProfissional}</h2>
            <p className="text-muted fs-5 mb-3">{`${professorInfo.universidade} - ${professorInfo.campus} - ${professorInfo.departamento}`}</p>

            {professorInfo.citacaoDestaque && (
              <blockquote className="blockquote fs-5 my-4 p-3 bg-light border-start border-5 border-primary">
                <p className="mb-0"><em>{`"${professorInfo.citacaoDestaque}"`}</em></p>
              </blockquote>
            )}

            <div dangerouslySetInnerHTML={{ __html: formatTextToHtml(professorInfo.sobreMimTextoLongo) }} />

            <div className="mt-4">
              <Button variant="primary" href={professorInfo.lattes} target="_blank" rel="noopener noreferrer" className="me-2">
                Currículo Lattes
              </Button>
              <Link to="/contact" className="btn btn-outline-secondary">
                Entrar em Contato
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-5 border-top">
          <Col>
            <h2 className="text-center mb-4">Principais Áreas de Interesse e Atuação</h2>
            <div className="text-center">
              {professorInfo.areasDeInteresse.map((area, index) => (
                <Badge key={index} bg="light" text="dark" className="me-2 p-2 mb-2">{area}</Badge>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
      <Footer headingText={professorInfo.nomeCompleto} showEmail={true} />
    </>
  );
};

export default About;
