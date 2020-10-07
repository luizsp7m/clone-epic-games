import React from 'react';

import { Container, Row, Releases, Panel } from './styles';

import Banner from '../../components/Banner'
import Card from '../../components/Card'

function Main() {
  return (
    <Container>
      <Row>
        <div>
          <h1>Descobrir</h1>
          <h1>Navegar</h1>
        </div>

        <div>
          <input type="text" placeholder="Procurar" />
        </div>
      </Row>

      <Banner />

      <Releases>
          <h1>Novos lançamentos</h1>
          <Panel>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Panel>
      </Releases>
    </Container>
  );
}

export default Main;