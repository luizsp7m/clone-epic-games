import React from 'react';

import { Container, Panel, Column, Image, Information } from './styles';

function Banner() {
  return (
      <Container>
          <Panel>
              <Column>
                <Image />
              </Column>
              <Column>
                <Information>
                    <span>Já disponível</span>
                    <h1>CastleStorm 2</h1>
                    <p>
                      Mire com suas catapultas! Comande suas tropas! Derrame sangue no campo de batalha!
                    </p>
                    <a href="#">Saiba mais</a>
                </Information>
              </Column>
          </Panel>
      </Container>
  );
}

export default Banner;