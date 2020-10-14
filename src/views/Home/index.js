import React from 'react';

import { Container } from './styles';

/* Components */
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;