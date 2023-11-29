"use client";
import React from "react";
import {
  Container,
  ElementoLista,
  LinguaInput,
  Lista,
  Logo,
  MenuLink,
  MenuMobileInput,
} from "@/app/components/Header/Header.styles";
import useTranslationContext from "@/app/hooks/useTranslationContext";

function Header() {
  const { linguaAtual, MudaLingua } = useTranslationContext();
  return (
    <Container id="topo">
      <MenuMobileInput type="checkbox" id="check" />

      <Logo alt="Logo da página" src="/icones/logo.svg" />

      <Lista>
        <ElementoLista>
          <MenuLink href="#projetos">{linguaAtual.Header.Projetos}</MenuLink>
        </ElementoLista>
        <ElementoLista>
          <MenuLink href="#sobre">{linguaAtual.Header.Sobre}</MenuLink>
        </ElementoLista>
        <ElementoLista>
          <MenuLink href="#contato">{linguaAtual.Header.Contato}</MenuLink>
        </ElementoLista>
      </Lista>

      <LinguaInput type="checkbox" id="lingua" onClick={MudaLingua} />
    </Container>
  );
}

export default Header;
