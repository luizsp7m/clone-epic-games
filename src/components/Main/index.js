import React from 'react';

import { Container, Releases, Panel } from './styles';

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Game from '../../components/Game';

import database from '../../data/database.json';

function Main() {
  return (
    <Container>

      <Banner />

      <Releases>
          <h1>{database.titulos[0].titulo}</h1>
          <Panel>
            <Card imagem={database.jogos[0].imagem} nome={database.jogos[0].nome} desenvolvedora={database.jogos[0].desenvolvedora} valor={database.jogos[0].valor} />
            <Card imagem={database.jogos[1].imagem} nome={database.jogos[1].nome} desenvolvedora={database.jogos[1].desenvolvedora} valor={database.jogos[1].valor} />
            <Card imagem={database.jogos[2].imagem} nome={database.jogos[2].nome} desenvolvedora={database.jogos[2].desenvolvedora} valor={database.jogos[2].valor} />
            <Card imagem={database.jogos[3].imagem} nome={database.jogos[3].nome} desenvolvedora={database.jogos[3].desenvolvedora} valor={database.jogos[3].valor} />
            <Card imagem={database.jogos[4].imagem} nome={database.jogos[4].nome} desenvolvedora={database.jogos[4].desenvolvedora} valor={database.jogos[4].valor} />
          </Panel>
      </Releases>

      <Game cor={database.banner[0].cor} titulo={database.titulos[2].titulo} nome={database.banner[0].nome} descricao={database.banner[0].descricao} botao={database.banner[0].botao} imagem={database.banner[0].imagem} />

      <Releases>
          <h1>{database.titulos[1].titulo}</h1>
          <Panel>
            <Card imagem={database.jogos[0].imagem} nome={database.jogos[0].nome} desenvolvedora={database.jogos[0].desenvolvedora} valor={database.jogos[0].valor} />
            <Card imagem={database.jogos[1].imagem} nome={database.jogos[1].nome} desenvolvedora={database.jogos[1].desenvolvedora} valor={database.jogos[1].valor} />
            <Card imagem={database.jogos[2].imagem} nome={database.jogos[2].nome} desenvolvedora={database.jogos[2].desenvolvedora} valor={database.jogos[2].valor} />
            <Card imagem={database.jogos[3].imagem} nome={database.jogos[3].nome} desenvolvedora={database.jogos[3].desenvolvedora} valor={database.jogos[3].valor} />
            <Card imagem={database.jogos[4].imagem} nome={database.jogos[4].nome} desenvolvedora={database.jogos[4].desenvolvedora} valor={database.jogos[4].valor} />
          </Panel>
      </Releases>

      <Game cor={database.banner[1].cor} titulo={database.titulos[3].titulo} nome={database.banner[1].nome} descricao={database.banner[1].descricao} botao={database.banner[1].botao} imagem={database.banner[1].imagem} />

      <Releases>
          <h1>{database.titulos[3].titulo}</h1>
          <Panel>
            <Card imagem={database.jogos[5].imagem} nome={database.jogos[5].nome} desenvolvedora={database.jogos[5].desenvolvedora} valor={database.jogos[5].valor} />
            <Card imagem={database.jogos[6].imagem} nome={database.jogos[6].nome} desenvolvedora={database.jogos[6].desenvolvedora} valor={database.jogos[6].valor} />
            <Card imagem={database.jogos[7].imagem} nome={database.jogos[7].nome} desenvolvedora={database.jogos[7].desenvolvedora} valor={database.jogos[7].valor} />
            <Card imagem={database.jogos[8].imagem} nome={database.jogos[8].nome} desenvolvedora={database.jogos[8].desenvolvedora} valor={database.jogos[8].valor} />
            <Card imagem={database.jogos[9].imagem} nome={database.jogos[9].nome} desenvolvedora={database.jogos[9].desenvolvedora} valor={database.jogos[9].valor} />
          </Panel>
      </Releases>
    </Container>
  );
}

export default Main;