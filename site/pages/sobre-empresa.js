import Head from 'next/head';

import Menu from '../components/Menu';

import { Container, Jumbotron } from 'reactstrap';

function Home() {
  return (
    <>
  <head>
    <title>Sobre Empresa - Celke</title>
    <meta name="description" content="Sobre a Empresa..."/>
    <meta name="author" content="Eu"/>
  </head>
<Menu />
<Jumbotron fluid className="descr-top">
  <style>
    {`.descr-top{
      background-color: #000;
      color: #fed136;
      padding-top: 100px;
      padding-bottom: 50px;
      margin-bottom: 0rem !important;
    }`}
  </style>
  <Container className="text-center">
    <h1 className="display-4">Sobre Empresa</h1>
   

  </Container>
</Jumbotron>


</>
  );
};

export default Home;