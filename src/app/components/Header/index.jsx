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

function Header() {
  return (
    <Container>
      <MenuMobileInput type="checkbox" id="check" />

      <Logo alt="Logo da página" src="/icones/logo.svg" />

      <Lista>
        <ElementoLista>
          <MenuLink href="/">Home</MenuLink>
        </ElementoLista>
        <ElementoLista>
          <MenuLink href="/">Projetos</MenuLink>
        </ElementoLista>
        <ElementoLista>
          <MenuLink href="/">Sobre</MenuLink>
        </ElementoLista>
      </Lista>

      <LinguaInput type="checkbox" id="lingua" />
    </Container>
  );
}

export default Header;
