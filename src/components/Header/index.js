import React from 'react';

import { Container, Navbar, Left, Right } from './styles';

import world from '../../assets/world.png';
import user from '../../assets/user.png';

function Header() {
  return (
      <Container>
          <Navbar>
              <Left>
                  <a href="#">Store</a>
                  <a href="#">Novidades</a>
                  <a href="#">Perguntas Frequentes</a>
                  <a href="#">Ajuda</a>
                  <a href="#">Unreal Engine</a>
              </Left>

              <Right>
                <a href="#">
                   <img src={world} alt="world" />
                </a>

                <a href="#">
                    <img src={user} alt="user" />
                    Entrar
                </a>

                <button>
                    Baixar Epic Games
                </button>
              </Right>
          </Navbar>
      </Container>
  );
}

export default Header;