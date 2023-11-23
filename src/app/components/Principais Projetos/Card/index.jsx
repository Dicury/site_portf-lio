"use client";

import React from "react";
import {
  Botao,
  Container,
  ContainerBotao,
  Descricao,
  Icone,
  Titulo,
} from "@/app/components/Principais Projetos/Card/Card.styles";

function Card() {
  return (
    <Container>
      <Icone src="/Avatar.png" />
      <Titulo>Título bem legal</Titulo>
      <Descricao>
        Olá, sou o Mateus Cury, desenvolvedor front-end formado em design
        digital. Possuo inglês fluente, habilidades em design e minhas
        principais tecnologias são: HTML, CSS, JavaScript, React, Nextjs e
        Styled Components.
      </Descricao>
      <ContainerBotao>
        <Botao>Site</Botao>
        <Botao>Código</Botao>
      </ContainerBotao>
    </Container>
  );
}

export default Card;
