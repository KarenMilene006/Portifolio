import React from 'react';
import Todo from '../../assets/todo.png';
import Jordan from '../../assets/jordan.png';
import Mequi from '../../assets/mequi.jpeg'
import Cores from '../../assets/Cores.jpeg'
import Tecnologia from '../../assets/Tecnologia.jpeg'
import { Container, H1, Section } from './projetoStyles';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';


const projetosData = [

  {
    image: Mequi,
    name: 'McDonald',
    liveLink: 'https://todo-list-8f8w.vercel.app/',
    githubLink: 'https://github.com/KarenMilene006/McDonald-s.git',
    technologies: ['React', 'Styled-Component'],
  },
  {
    image:Todo,
    name: 'TodoList',
    liveLink: 'https://todo-list-sepia-zeta.vercel.app/',
    githubLink: 'https://github.com/KarenMilene006/TodoList.git',
    technologies: ['Javascript'],
  },
  {
   
    image: Tecnologia,
    name: 'Tecnologia',
    liveLink: ' https://tecnologia-wheat.vercel.app/',
    githubLink: 'https://karenmilene006.github.io/tecnologia/',
    technologies: ['Html', 'Css', 'Javascript'],
  },
  {
    image: Cores,
    name: 'Cores',
    liveLink: 'https://653a39228152397abb1167f3--earnest-gelato-4d9e7a.netlify.app/',
    githubLink: 'https://github.com/KarenMilene006/DesafioCodelandia3-Cores.git',
    technologies: ['Html', 'Css'],
  },
  {
    image: Jordan,
    name: 'Loja Jordan',
    liveLink: 'https://desafio-codelandia-nike.vercel.app/',
    githubLink: 'https://github.com/KarenMilene006/DesafioCodelandia-Nike.git',
    technologies: ['Html', 'Css'],
  },
];

const Projeto = ({ projeto }) => (
  <div>
    <img src={projeto.image} alt="" />
    <p>{projeto.name}</p>
    <span>
      <p>
        <a href={projeto.liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt size={35} className="icon" />
        </a>
      </p>
      <p>
        <a href={projeto.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} className="icon" />
        </a>
      </p>
    </span>
    <span className="tecnologias">
      {projeto.technologies.map((tech, index) => (
        <h4 key={index}>{tech}</h4>
      ))}
    </span>
  </div>
);

export const Projetos = () => {
  return (
    <>
      <Section>
        <H1>Projetos</H1>
        <Container>
          {projetosData.map((projeto, index) => (
            <Projeto key={index} projeto={projeto} />
          ))}
        </Container>
      </Section>
    </>
  );
};
