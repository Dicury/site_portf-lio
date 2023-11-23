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

function Sobre() {
  return (
    <Container>
      <ContainerTopicos>
        <Titulos>Minha Trajetória</Titulos>
        <Topicos>
          2018 - 2022
          <br />
          Bacharel em Design Digital
          <br />
          PUC Campinas
        </Topicos>
        <Topicos>
          2020 - 2021
          <br />
          Estagiário em Design - Smartus
        </Topicos>
        <Topicos>
          2021 - 2022
          <br />
          Estagiário em Design - GRI Club
        </Topicos>
        <Topicos>
          2022 - 2022
          <br />
          Junior Media Editor - GRI Club
        </Topicos>
        <Topicos>
          2022 - Hoje
          <br />
          Desenvolvedor Front-End
        </Topicos>
      </ContainerTopicos>

      <ContainerParagrafo>
        <Titulos>Sobre mim</Titulos>
        <Paragrafo>
          Terminei minha formação em design digital no meio de 2022, o foco era
          o design, porém nesta formação também foi introduzido um pouco de
          conhecimento front-end através de CSS e HTML. Eu já estava trabalhando
          com design desde 2020, quando comecei como estagiário na Smartus.
          Durante 2020 e 2022 continuei atuando como designer e, por conta do
          estilo do trabalho aprendi a trabalhar efetivamente com vários times e
          pessoas diferentes dentro da empresa, visando sempre se comunicar de
          maneira efetiva para garantir o entendimento de pessoas que não
          possuíam conhecimento em design. No final de 2022, deixei a empresa
          que estava para focar meus estudos em front-end visando mudar de área
          de atuação. Os estudos foram feitos a partir de plataformas como a
          Alura e Youtube, além da criação de projetos pessoais com a finalidade
          de aprofundar meu conhecimento e me desafiar cada vez mais.
        </Paragrafo>
      </ContainerParagrafo>
    </Container>
  );
}

export default Sobre;
