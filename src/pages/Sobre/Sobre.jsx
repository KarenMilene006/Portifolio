
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { GoMortarBoard } from 'react-icons/go';
import { BsFillMortarboardFill } from 'react-icons/bs';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { Section, ContainerSobre, ContainerImg, Img, ContainerTexto, ContainerFormacacao, H1, ContainerSkills, Container, DivImg } from './sobreStyles';
import Karen from '../../assets/Karen.jpeg';
import styledcomponent from '../../assets/styled2.png';
import { Howl } from 'howler';

import hoverSound from '../../assets/click.mp3';

const sound = new Howl({
  src: [hoverSound],
});

const playSoundOnClick = () => {
  sound.play();
};


export const Sobre = () => {
 
  return (
    <Section>
      <ContainerSobre>
        <ContainerImg>
          <Img src={Karen} alt="profile" />
        </ContainerImg>

        <ContainerTexto>
          <h3>Um pouco sobre mim</h3>
          <h2>Sobre</h2>
          <p>
            Me chamo Karen, tenho 21 anos, e meu percurso no desenvolvimento front-end começou em 2022, quando mergulhei nos estudos de HTML e CSS. A partir dessa base, aprofundei meu conhecimento em JavaScript e, atualmente, estou focada em aprimorar minhas habilidades com React. Estou em busca da minha primeira oportunidade no mercado de trabalho como desenvolvedora front-end júnior, seja por meio de estágio ou posição júnior. Minha dedicação aos estudos e meu constante foco no aprendizado refletem meu comprometimento em evoluir e contribuir de maneira significativa para projetos futuros.
          </p>
        </ContainerTexto>
      </ContainerSobre>

      <ContainerFormacacao>
        <H1>Formação<GoMortarBoard color='#f0e8e8' /></H1>
        <h2><BsFillMortarboardFill className='icon-mortarboard' color='#f0e8e8' size={40}/> -Universidade José do Rosário Vellano - Ciência da Computação (1º a 3º Período)</h2>
        <h2><BsFillMortarboardFill  className='icon-mortarboard' color='#f0e8e8' size={40}/> -Universidade Cruzeiro do Sul Virtual - Período Atual: 5º Período</h2>
      </ContainerFormacacao>
    
    <ContainerSkills>
      <h1>Skills</h1>
    <Container>
      <div onMouseEnter={playSoundOnClick}><FaHtml5 color='red' className='icon-skills'/><h3>Html</h3></div>
      <div onMouseEnter={playSoundOnClick}><FaCss3Alt color='blue' className='icon-skills'/><h3>Css</h3></div>
      <div onMouseEnter={playSoundOnClick}><FaGitAlt color='#F05033' className='icon-skills'/><h3>Git</h3></div>
      <div onMouseEnter={playSoundOnClick}><IoLogoJavascript color='yellow' className='icon-skills'/><h3>Javascript</h3></div>
      <div onMouseEnter={playSoundOnClick}><FaReact color='blue' className='icon-skills'/><h3>React</h3></div>
      <DivImg onMouseEnter={playSoundOnClick}><img src={styledcomponent}/><h3>Styled-Component</h3></DivImg>
    </Container>
    </ContainerSkills>
    </Section>
  );
};
