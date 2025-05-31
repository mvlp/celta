import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import Footer from "../../components/footer/Footer";
import PageHeader from '../../components/pageheader/PageHeader';
import { Link } from 'react-router-dom';
import SerraImage from "../../assets/img/serra.png";

// Movendo professorInfo para fora do componente para evitar recriação em cada render
const professorInfo = {
  nomeCompleto: "Marcos Vinicius Lopes Pereira",
  tituloCurto: "Prof. Dr. Marcos Vinicius L. Pereira",
  cargo: "Professor Adjunto",
  universidade: "Universidade Federal de São João Del-Rei (UFSJ)",
  campus: "Campus Alto Paraopeba",
  departamento: "Departamento das Engenharias de Telecomunicação e Mecatrônica (DETEM)",
  fotoUrl: "/images/marcos_pereira_profile.jpg",
  resumoBreve: "Possui graduação em Engenharia de Controle e Automação (2003), mestrado em Engenharia Elétrica (2006) e doutorado em Administração (2020), todas essas obtidas na Universidade Federal de Minas Gerais (UFMG). Atualmente é professor adjunto Universidade Federal de São João Del-Rei (UFSJ), Campus Alto Paraopeba, atuando, principalmente, nos cursos de Engenharia Mecatrônica e Engenharia de Telecomunicações. Tem experiência na área de Engenharia de Controle e Automação, e possui os seguintes áreas de interesse: controle de processos industriais, processamento de sinais, identificação de sistemas dinâmicos, otimização de sistemas e inteligência computacional (redes neurais e sistemas nebulosos). É membro do CELTA - Centro de Estudos em Engenharia Eletrônica e Automação, grupo de pesquisa voltado para as áreas de controle, robótica, computação, modelagem, eletrônica e visão computacional, entre outras. Também é membro do NUFI - Núcleo de Ensino, Pesquisa e Consultoria em Finanças e Contabilidade. Tal núcleo está vinculado ao Departamento de Ciências Administrativas (CAD) e ao Centro de Pós-Graduação e Pesquisas em Administração (CEPEAD) da Faculdade de Ciências Econômicas (FACE) da Universidade Federal de Minas Gerais (UFMG).",
  resumoLattesHome: "Professor Adjunto na UFSJ com doutorado em Administração pela UFMG. Experiência em Controle e Automação, com interesse em controle de processos, processamento de sinais, identificação de sistemas, otimização e inteligência computacional.",
  lattes: "http://lattes.cnpq.br/1294789533388093",
  orcid: "https://orcid.org/0000-0002-0250-8743",
  email: "marcos.vinicius@ufsj.edu.br",
  telefoneProfissional: "(31) 37497311",
  enderecoProfissional: "Universidade Federal de São João Del-Rei, Campus Alto Paraopeba. Rod.: MG 443 KM 7, 36420000 - Ouro Branco, MG - Brasil",
  urlHomepageUFSJ: "http://www.ufsj.edu.br/cap/",
  pesquisaDestaque: {
    titulo: "Engenharia de Controle, Automação e Inteligência Computacional",
    descricao: "Com vasta experiência em controle de processos industriais, processamento de sinais, identificação de sistemas dinâmicos, otimização e aplicação de inteligência computacional (redes neurais e sistemas nebulosos), o Professor Marcos dedica-se a solucionar problemas complexos e desenvolver inovações tecnológicas nas áreas de Engenharia Mecatrônica e de Telecomunicações."
  },
  nomesCitacoes: [
    "PEREIRA, M. V. L.",
    "PEREIRA, MARCOS",
    "PEREIRA, MARCOS VINICIUS LOPES",
    "PEREIRA, MARCOS V. L."
  ]
};

const Home: React.FC = (): JSX.Element => { // Adicionando tipo de retorno explícito JSX.Element
  return (
    <>
      <PageHeader headingText="Marcos Vinicius Lopes Pereira" image={SerraImage} />

      <Container className="my-5">
        <Row className="align-items-center mb-5 pb-5 border-bottom">
          <Col md={7}>
            <h1 className="display-4 fw-bold">Sobre</h1>
            <h3 className="text-muted mb-4">{`${professorInfo.cargo}, ${professorInfo.universidade} (${professorInfo.campus})`}</h3>
            <p className="lead">{professorInfo.resumoBreve}</p>
            <Link to="/about" className="btn btn-primary btn-lg me-2" role="button" onClick={() => window.scrollTo(0, 0)}>Sobre Mim</Link>
            <Button variant="outline-secondary" size="lg" href={professorInfo.lattes} target="_blank">Currículo Lattes</Button>
          </Col>
          <Col md={5} className="text-center">
            <Image src={professorInfo.fotoUrl} roundedCircle fluid alt={`Foto de ${professorInfo.nomeCompleto}`} style={{ maxWidth: '300px', border: '5px solid #eee' }} />
          </Col>
        </Row>

        <Row className="my-5 py-5 align-items-center bg-light">
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h2 className="display-5 mb-3">{professorInfo.pesquisaDestaque.titulo}</h2>
            <p className="lead text-muted">{professorInfo.pesquisaDestaque.descricao}</p>
            <Link to="/papers" className="btn btn-secondary" role="button" onClick={() => window.scrollTo(0, 0)}>Ver Publicações</Link>
          </Col>
        </Row>

        <Row className="my-5 text-center">
          <Col>
            <h2 className="mb-5">Descubra Mais</h2>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3">Pesquisa</Card.Title>
                <Card.Text>
                  Explore as áreas de pesquisa, projetos atuais e futuras investigações.
                </Card.Text>
                <Link to="/papers" className="btn btn-outline-primary mt-auto" role="button" onClick={() => window.scrollTo(0, 0)}>Linhas de Pesquisa</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3">Publicações</Card.Title>
                <Card.Text>
                  Acesse artigos científicos, capítulos de livros e outras publicações acadêmicas.
                </Card.Text>
                <Link to="/papers" className="btn btn-outline-primary mt-auto" role="button" onClick={() => window.scrollTo(0, 0)}>Ver Publicações</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3">Ensino</Card.Title>
                <Card.Text>
                  Informações sobre disciplinas ministradas, materiais de aula e orientação a alunos.
                </Card.Text>
                <Link to="/students" className="btn btn-outline-primary mt-auto" role="button" onClick={() => window.scrollTo(0, 0)}>Atividades de Ensino</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3">Contato</Card.Title>
                <Card.Text>
                  Entre em contato para colaborações, orientações ou outras informações.
                </Card.Text>
                <Link to="/contact" className="btn btn-outline-primary mt-auto" role="button" onClick={() => window.scrollTo(0, 0)}>Fale Comigo</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer headingText={professorInfo.tituloCurto} showEmail={true} />
    </>
  );
};

export default Home;
