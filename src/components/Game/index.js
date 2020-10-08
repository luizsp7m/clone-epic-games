import React from 'react';

import { Container, Panel } from './styles';

function Game(props) {
  return (
      <Container>
          <h1>{props.titulo}</h1>

          <Panel cor={props.cor}>
              <div>
                  <h1>{props.nome}</h1>
                  <p>{props.descricao}</p>
                  <button>
                    {props.botao}
                  </button>
              </div>

              <div>
                  <img src={props.imagem} />
              </div>
          </Panel>
      </Container>
  );
}

export default Game;