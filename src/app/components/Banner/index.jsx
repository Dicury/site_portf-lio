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
import useTranslationContext from "@/app/hooks/useTranslationContext";

function Banner() {
  const { linguaAtual } = useTranslationContext();
  return (
    <Container>
      <ContainerInterno>
        <Titulo>{linguaAtual.Banner.Titulo}</Titulo>
        <Texto>
          {linguaAtual.Banner.Texto}
          <TextoDestaque>{linguaAtual.Banner.Destaque}</TextoDestaque>
        </Texto>
      </ContainerInterno>

      <Avatar src="/Avatar.png" alt="Foto de perfil do Mateus Cury" />
    </Container>
  );
}

export default Banner;
