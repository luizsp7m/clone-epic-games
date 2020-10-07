import React from 'react';

import { Container } from './styles';

/* Components */
import Header from '../../components/Header';
import Main from '../../components/Main';

function Home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default Home;