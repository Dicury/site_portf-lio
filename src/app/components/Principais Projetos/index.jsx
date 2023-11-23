"use client";

import React from "react";
import Card from "./Card";
import {
  Container,
  Titulo,
} from "@/app/components/Principais Projetos/PrincipaisProjetos.styles";

function PrincipaisProjetos() {
  return (
    <Container>
      <Titulo>Principais Projetos</Titulo>
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default PrincipaisProjetos;
