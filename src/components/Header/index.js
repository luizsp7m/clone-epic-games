import React from 'react';

import { Container, Navbar, Left, Right, Row, MenuToggle } from './styles';

import world from '../../assets/world.png';
import user from '../../assets/user.png';

function Header() {
    return (
        <Container>
            <Navbar>
                <Left>
                    <a href="#" className="active">Store</a>
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

                <MenuToggle>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </MenuToggle>
            </Navbar>

            <Row>
                <div>
                    <h1>Descobrir</h1>
                    <h1>Navegar</h1>
                </div>

                <div>
                    <input type="text" placeholder="Procurar" />
                </div>
            </Row>
        </Container>
    );
}

export default Header;