import React from 'react';

import { Container, Image } from './styles';

function Card() {
  return (
      <Container>
        <Image />
        <h1>The Witcher 3: Wild Hunt</h1>
        <h2>CD Projekt RED</h2>
        <span>R$ 29,99</span>
      </Container>
  );
}

export default Card;