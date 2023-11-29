"use client";

import React from "react";
import Card from "./Card";
import {
  Container,
  Titulo,
} from "@/app/components/Principais Projetos/PrincipaisProjetos.styles";
import useTranslationContext from "@/app/hooks/useTranslationContext";

function PrincipaisProjetos() {
  const { linguaAtual } = useTranslationContext();
  return (
    <Container id="projetos">
      <Titulo>{linguaAtual.PrincipaisProjetos.Titulo}</Titulo>
      <Card
        site="https://cafe-break.vercel.app"
        codigo="https://github.com/Dicury/cafe_break"
        imagem="/sites/cafeBreak.png"
        titulo={linguaAtual.Projeto1.Titulo}
        descricao={linguaAtual.Projeto1.Descricao}
        key={linguaAtual.Projeto1.Titulo}
      />
      <Card
        site="https://interactive-comments-section-teal.vercel.app/"
        codigo="https://github.com/Dicury/Challenge-03---Interactive-comments-section"
        imagem="/sites/interactive-comments-section.png"
        titulo={linguaAtual.Projeto2.Titulo}
        descricao={linguaAtual.Projeto2.Descricao}
        key={linguaAtual.Projeto2.Titulo}
      />
      <Card
        site="https://age-calculator-app-pink-six.vercel.app"
        codigo="https://github.com/Dicury/Challenge-02---Age-calculator-app"
        imagem="/sites/age-calculator-app.png"
        titulo={linguaAtual.Projeto3.Titulo}
        descricao={linguaAtual.Projeto3.Descricao}
        key={linguaAtual.Projeto3.Titulo}
      />
      <Card
        site="https://challenge-results-summary-component-rosy.vercel.app/"
        codigo="https://github.com/Dicury/Challenge-Results-summary-component"
        imagem="/sites/results-summary-component.png"
        titulo={linguaAtual.Projeto4.Titulo}
        descricao={linguaAtual.Projeto4.Descricao}
        key={linguaAtual.Projeto4.Titulo}
      />
    </Container>
  );
}

export default PrincipaisProjetos;
