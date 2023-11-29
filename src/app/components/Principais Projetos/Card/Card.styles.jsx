"use client";

import Colors from "@/tokens/colors";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);

  background-color: ${Colors.SECUNDARIA};
  border-radius: 20px;
  padding: 3rem;
  gap: 2rem;

  @media (max-width: 1360px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  @media (max-width: 767px) {
    width: min(400px, 100%);
    padding: 2rem;
    gap: 1rem;
  }
`;

export const Icone = styled.img`
  grid-column: 1/2;
  grid-row: 1/4;
  border-radius: 20px;
  width: 400px;
  height: 267px;
  object-fit: cover;
  object-position: left top;

  @media (max-width: 1360px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Titulo = styled.h3`
  font-weight: 700;
  color: ${Colors.PRIMARIA};
  font-size: 60px;

  @media (max-width: 1360px) {
    font-size: 48px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Descricao = styled.p`
  font-size: 20px;
  text-align: justify;

  @media (max-width: 1360px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const ContainerBotao = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const LinkBotao = styled(Link)`
  display: flex;
  color: ${Colors.FUNDO};
  font-weight: 700;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PRIMARIA};
  text-decoration: none;
  border: none;
  border-radius: 20px;
  padding: 1rem;
  width: 160px;
  height: 50px;
  align-self: end;

  &:hover {
    color: ${Colors.PRIMARIA};
    background-color: ${Colors.FUNDO_DESTAQUE};
  }

  @media (max-width: 1360px) {
    width: 130px;
    height: 50px;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;
