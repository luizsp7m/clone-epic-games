import React from 'react';

import { Container } from './styles';

function Card(props) {
  return (
      <Container>
        <img src={props.imagem} alt="#" />
        <h1>{props.nome}</h1>
        <h2>{props.desenvolvedora}</h2>
        <span>{props.valor}</span>
      </Container>
  );
}

export default Card;