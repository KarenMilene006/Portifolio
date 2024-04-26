import React from 'react'
import { Container, ContainerIcon, H1, Section } from '../Contato/contatoStyles'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub,FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contato = () => {

  
  return (
    <Section>
      <H1><span>Entre em</span> Contato</H1>
      <Container>
        <div>
          <ContainerIcon>
          <BsLinkedin size={30} className='icon'  />
          </ContainerIcon>
          <a href="https://www.linkedin.com/in/karen-milene/" target='_blanck'>Linkedin</a>
        </div>

        <div>
          <ContainerIcon>
          <FaGithub size={30}  className='icon'/>
          </ContainerIcon>
          <a href="https://github.com/KarenMilene006" target='_blanck'>Github</a>
        </div>

        <div>
          <ContainerIcon>
          <SiGmail size={30} color='#a430de' className='icon' />
          </ContainerIcon>
          <a href="mailto:karenmilene006@gmail.com?subject=&body=" target='_blanck'>Gmail</a>
        </div>

      </Container>
    </Section>
  )
}
