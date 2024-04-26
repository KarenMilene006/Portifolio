import React from 'react'

import Menina from '../../assets/menina.gif'
import Typewriter from 'typewriter-effect';
import {  ContainerImagem, ContainerTexto, Section } from '../Home/homeStyle';



export const Home = () => {

  
  return (
    <>
    <Section>

    <ContainerImagem>
     <img src={Menina} />
  </ContainerImagem>
      
  <ContainerTexto>
    <h1>Eu sou a Karen Milene!</h1>
  <span>
    <Typewriter
  options={{
    strings: ['Desenvolvedora Front-End'],
    autoStart: true,
    loop: true,
  }}/>
  </span>


  </ContainerTexto>
    </Section>
    </>
  )
}
