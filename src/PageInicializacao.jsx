import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import background from './assets/ceu.avif';
import { GlobalStyle } from './components/GlobalStyle';
import { Howl } from 'howler';

import som from './assets/inicializacao.mp3';

const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    animation: ${typingAnimation} 4s steps(40) forwards;

    @media(min-width:320px) and (max-width: 500px){
       font-size:1rem;
  }
}
`

export const PageInicializacao = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const welcomeText = "Bem vindo(a) ao meu portfólio";
    let index = 0;

    const intervalId = setInterval(() => {
      setText(welcomeText.slice(0, index));
      index++;

      if (index > welcomeText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const sound = new Howl({
      src: [som],
    });

    
    sound.play();

    return () => sound.unload();
  }, []);

  return (
    <Main>
      <GlobalStyle />
      <h1>{text}</h1>
    </Main>
  );
};
