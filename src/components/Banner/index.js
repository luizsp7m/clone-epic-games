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
                        Lorem ipsum dolor elit. id luctus. Sed viverra tristique molestie. Ut rutrum velit sapien, sit amet pellentesque
                    </p>
                    <a href="#">Saiba mais</a>
                </Information>
              </Column>
          </Panel>
      </Container>
  );
}

export default Banner;