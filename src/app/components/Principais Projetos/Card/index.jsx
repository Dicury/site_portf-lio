"use client";

import React from "react";
import {
  LinkBotao,
  Container,
  ContainerBotao,
  Descricao,
  Icone,
  Titulo,
} from "@/app/components/Principais Projetos/Card/Card.styles";

function Card({ titulo, descricao, site, codigo, imagem }) {
  return (
    <Container>
      <Icone src={imagem} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <ContainerBotao>
        <LinkBotao href={site} target="blank">
          Site
        </LinkBotao>
        <LinkBotao href={codigo} target="blank">
          Código
        </LinkBotao>
      </ContainerBotao>
    </Container>
  );
}

export default Card;
