import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RiMenu3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

import { Container, GlobalStyle } from './GlobalStyle';
import { BotaoMenu, ContainerMenu, H1, Nav } from './headerStyle';
import { Home } from '../pages/Home/Home';
import { Sobre } from '../pages/Sobre/Sobre';
import { Projetos } from '../pages/Projetos/Projetos';
import { Contato } from '../pages/Contato/Contato';

import './transitions.css';

export const Header = () => {
  const jc = '<Karen Milene/>';
  const [menu, setMenu] = useState(<RiMenu3Line />);
  const [isOpen, setOpen] = useState(false);

  const MenuOpen = () => {
    setMenu((prevMenu) => {
      if (prevMenu.type === RiMenu3Line) {
        return <IoMdClose />;
      } else {
        return <RiMenu3Line />;
      }
    });
  };

  const closeMenu = () => {
    setMenu(<RiMenu3Line />);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <H1>{jc}</H1>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/projetos" onClick={closeMenu}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
          <BotaoMenu onClick={MenuOpen}>{menu}</BotaoMenu>
        </Nav>
      </Container>
      <ContainerMenu>
        {menu.type === IoMdClose && <Sidebar closeMenu={closeMenu} />}
      </ContainerMenu>

      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition
                key="home"
                timeout={300}
                classNames="fade"
              >
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/sobre"
          element={
            <TransitionGroup>
              <CSSTransition
                key="sobre"
                timeout={300}
                classNames="fade"
              >
                <Sobre />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/projetos"
          element={
            <TransitionGroup>
              <CSSTransition
                key="projetos"
                timeout={300}
                classNames="fade"
              >
                <Projetos />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/contato"
          element={
            <TransitionGroup>
              <CSSTransition
                key="contato"
                timeout={300}
                classNames="fade"
              >
                <Contato />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </>
  );
};

const Sidebar = ({ closeMenu }) => {
  return (
    <>
    <ul>
      <li>
        <Link to="/" onClick={closeMenu}>
          Início
        </Link>
      </li>
      <li>
        <Link to="/sobre" onClick={closeMenu}>
          Sobre
        </Link>
      </li>
      <li>
        <Link to="/projetos" onClick={closeMenu}>
          Projetos
        </Link>
      </li>
      <li>
        <Link to="/contato" onClick={closeMenu}>
          Contato
        </Link>
      </li>
    </ul>

    </>
  );
};
