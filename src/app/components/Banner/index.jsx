"use client";

import React from "react";
import {
  Avatar,
  Container,
  Texto,
  TextoDestaque,
  Titulo,
  ContainerInterno,
} from "@/app/components/Banner/Banner.styles";

function Banner() {
  return (
    <Container>
      <ContainerInterno>
        <Titulo>Desenvolvedor Front-end & Designer Digital.</Titulo>
        <Texto>
          Olá, sou o Mateus Cury, desenvolvedor front-end formado em design
          digital. Possuo{" "}
          <TextoDestaque>inglês fluente, habilidades em design</TextoDestaque> e
          minhas principais tecnologias são:{" "}
          <TextoDestaque>
            HTML, CSS, JavaScript, React, Nextjs e Styled-Components.
          </TextoDestaque>
        </Texto>
      </ContainerInterno>

      <Avatar src="/Avatar.png" alt="Foto de perfil do Mateus Cury" />
    </Container>
  );
}

export default Banner;
