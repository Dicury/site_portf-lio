"use client";

import React from "react";
import {
  Container,
  ContainerParagrafo,
  ContainerTopicos,
  Paragrafo,
  Titulos,
  Topicos,
} from "@/app/components/Sobre/Sobre.styles";
import useTranslationContext from "@/app/hooks/useTranslationContext";

function Sobre() {
  const { linguaAtual } = useTranslationContext();
  return (
    <Container id="sobre">
      <ContainerTopicos>
        <Titulos>{linguaAtual.Sobre.TituloTopicos}</Titulos>
        <Topicos>
          2018 - 2022
          <br />
          {linguaAtual.Sobre.TextoTopico1}
        </Topicos>
        <Topicos>
          2020 - 2021
          <br />
          {linguaAtual.Sobre.TextoTopico2}
        </Topicos>
        <Topicos>
          2021 - 2022
          <br />
          {linguaAtual.Sobre.TextoTopico3}
        </Topicos>
        <Topicos>
          2022 - 2022
          <br />
          {linguaAtual.Sobre.TextoTopico4}
        </Topicos>
        <Topicos>
          2022 - Hoje
          <br />
          {linguaAtual.Sobre.TextoTopico5}
        </Topicos>
      </ContainerTopicos>

      <ContainerParagrafo>
        <Titulos>{linguaAtual.Sobre.TituloParagrafo}</Titulos>
        <Paragrafo>{linguaAtual.Sobre.TextoParagrafo}</Paragrafo>
      </ContainerParagrafo>
    </Container>
  );
}

export default Sobre;
