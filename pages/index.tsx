import type {NextPage} from 'next'
import Head from 'next/head'
import Image from '~/Image';
import profile from '../public/profile.jpg';
import Container from '~/Container';
import Section from '~/Section';
import Topic from '~/Topic';
import {TopicProps} from '~/Topic/types';

type ResumeData = {
  experiences: TopicProps[],
  education: TopicProps[],
};

const data: ResumeData = {
  experiences: [
    {
      title: 'Engenheiro de Software',
      description: 'Desenvolvimento de arquitetura e interfaces de usuário modernas e\n' +
        'dinâmicas com React.js e Next.js. Desenvolvimento de componentes de\n' +
        'interface e documentação com Storybook.js. Desenvolvimento de API\n' +
        'RESTful com Java e Spring Boot.',
      caption1: 'Maio 2022 - Presente',
      caption2: 'Digisystem'
    },
    {
      title: 'Full Cycle Software Engineer',
      description: 'Desenvolvimento de micro serviços para cálculo de indicadores\n' +
        'operacionais, automação de relatórios, desenvolvimento de aplicações web\n' +
        'e Android TV, e construção e manutenção de ambientes Docker –\n' +
        'tecnologias utilizadas: Python/Django, PHP/Laravel,\n' +
        'Javascript/Typescript/Angular, HTML5, SCSS, MySQL, Postgres,\n' +
        'Docker/Kubernets, Git, MySQL, Java.\n',
      caption1: 'Setembro 2021 – maio 2022',
      caption2: 'Correios'
    },
    {
      title: 'Analista Programador / experiência do Cliente',
      description: 'Desenvolvimento de ferramenta de CRM (Customer Relationship\n' +
        'Management) e soluções de CX/UX (Experiência do Cliente/Usuário),\n' +
        'implantação de metodologias de mapeamento de jornada do Cliente e\n' +
        'construção de personas nos departamentos de formatação de produtos\n' +
        'e canais de atendimento - tecnologias utilizadas: PHP/Laravel,\n' +
        'Javascript/Typescript/Angular, MySQL, Docker/Kubernets, Git, HTML,\n' +
        'SCSS, Linux.',
      caption1: 'Janeiro 2019 - agosto 2021',
      caption2: 'Correios'
    },
    {
      title: 'Lider Técnico / Analista Programador (CRM)',
      description: 'Lider de 26 profissionais (devs e administradores de dados) em nível\n' +
        'nacional e desenvolvimento de ferramenta de CRM e soluções de CX/UX,\n' +
        'data mining e automação de relatórios - tecnologias utilizadas: Python,\n' +
        'PHP/Laravel, Javascript/Typescript/Angular, Docker/Kubernets, Git,\n' +
        'HTML, SCSS, Linux, MySQL, Postgres, SQLServer.',
      caption1: 'Maio 2014 – dezembro 2018',
      caption2: 'Correios'
    },
    {
      title: 'Analista Desenvolvedor Jr',
      description: 'Desenvolvimento de aplicações web e Android, desenvolvimento e\n' +
        'manutenção de site institucional de departamento, automação de\n' +
        'cadastros no ERP em lote, automação de relatórios, e programação de\n' +
        'aplicações de banco de dados – tecnologias utilizadas: Java, PHP, HTML,\n' +
        'CSS3, Javascript, Sharepoint, VBA e MS Access.',
      caption1: 'Maio 2009 - abril 2014',
      caption2: 'Correios'
    }
  ],
  education: [
    {
      title: 'Graduação',
      description: 'Tecnologo - Informática com ênfase em gestão de negócios , Tecnologia da Informação',
      caption1: '2008 - 2011',
      caption2: 'FATEC-ZL SP'
    },
    {
      title: 'Pós-graduação',
      description: 'Pós-graduação em Gestão de Marketing, Administração e Negócios',
      caption1: '2018 - 2019',
      caption2: 'Senac DF'
    }
  ]
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dionisio G.R.S. Machado</title>
        <meta name="description" content="Dionisio G.R.S. Machado"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Container>
        <>
          <h1>FULL CYCLE SOFTWARE ENGINEER</h1>
          <h1>PASSION AND <b>EXPERIENCE</b></h1>
          <br/>
          <div className="row text-center">
            <div className="col">
              <Image image={profile}
                     alt="profile image"
                     type="image/jpg"
                     width={200}
                     rounded/>
              <br/>
              <br/>
              <h5>Dionisio Machado</h5>
              <p>User interface designer with a wealth of experience and a great passion in building new products and
                improving customer relationship during the design on New York - United States.</p>
            </div>
            <div className="col-md-8 d-flex flex-column align-items-end">
              <h2>EXPERIENCE</h2>
              <Section>
                <>
                  {
                    data.experiences.map((topic, index, array) => (
                      <>
                        <Topic key={index} {...topic}/>
                        {index !== array.length - 1 && <hr/>}
                      </>
                    ))
                  }
                </>
              </Section>

              <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-end">
                  <h2>EDUCATION</h2>
                  <Section>
                    <>
                      {
                        data.education.map((topic, index, array) => (
                          <>
                            <Topic key={index} {...topic}/>
                            {index !== array.length - 1 && <hr/>}
                          </>
                        ))
                      }
                    </>
                  </Section>
                </div>

                <div className="col-md-6 d-flex flex-column align-items-end">
                  <h2>AWARDS</h2>
                  <Section>
                    <>
                      {/*<Topic/>*/}
                      {/*<hr/>*/}
                      {/*<Topic/>*/}
                    </>
                  </Section>
                </div>

                <div className="col-md-6 d-flex flex-column align-items-end">
                  <h2>SKILLS</h2>
                  <Section>
                    <>
                      {/*<Topic/>*/}
                      {/*<hr/>*/}
                      {/*<Topic/>*/}
                    </>
                  </Section>
                </div>
              </div>

            </div>
          </div>
        </>
      </Container>
    </>
  )
}

export default Home
