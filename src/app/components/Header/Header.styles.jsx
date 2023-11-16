"use client";

import Colors from "@/tokens/colors";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 27px 200px;
  gap: 28px;

  @media (max-width: 850px) {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;
export const Logo = styled.img``;

export const Lista = styled.ul`
  @media (max-width: 850px) {
    z-index: 2;
    position: fixed;
    width: 60%;
    height: 100vh;
    left: -100%;
    top: 0;
    background: ${Colors.PRIMARIA};
    transition: all 0.5s;
    padding-left: 4rem;
    padding-top: 1rem;
  }
`;
export const ElementoLista = styled.li`
  display: inline-block;
  line-height: 40px;
  margin: 0 5px;
  @media (max-width: 850px) {
    display: block;
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${Colors.DESTAQUE};
  }

  @media (max-width: 850px) {
    color: ${Colors.FUNDO};
  }
`;

export const MenuMobileInput = styled.input`
  display: none;
  @media (max-width: 850px) {
    content: url(/icones/Menu.svg);
    appearance: none;
    display: block;
    width: 38px;
    z-index: 100;

    &#check:checked {
      content: url(/icones/Menu_fechado.svg);
    }

    &#check:checked ~ ul {
      left: 0;
    }
  }
`;

export const LinguaInput = styled.input`
  content: url(/icones/EUA.svg);
  appearance: none;
  display: block;

  &#lingua:checked {
    content: url(/icones/Brasil.svg);
  }

  @media (max-width: 850px) {
    width: 38px;
    height: 38px;
  }
`;
