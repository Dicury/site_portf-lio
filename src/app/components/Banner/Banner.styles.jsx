"use client";

import Colors from "@/tokens/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10vw;
  background-color: ${Colors.SECUNDARIA};
  color: ${Colors.PRIMARIA};
  border-radius: 20px;
  width: auto;
  height: auto;
  padding: 3rem;
  margin: 8vh 10vw;

  @media (max-width: 1360px) {
    margin: 0 5vw;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
    margin: 5rem 1rem 1rem 1rem;
    padding: 2rem;
  }
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  width: 60%;

  @media (max-width: 767px) {
    width: auto;
  }
`;

export const Titulo = styled.h1`
  font-weight: 700;
  font-size: clamp(2vw, 2vw + 1.5rem, 3.75rem);
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Texto = styled.p`
  font-weight: 400;
  font-size: clamp(1vw, 1vw + 0.5rem, 20px);
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TextoDestaque = styled.span`
  font-weight: 700;
  font-size: clamp(1vw, 1vw + 0.5rem, 20px);
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Avatar = styled.img`
  border-radius: 20px;
  grid-column: 2/3;
  grid-row: 1/3;
  width: clamp(15vw, 20vw, 380px);

  @media (max-width: 1360px) {
    width: clamp(12rem, 20vw, 380px);
    align-self: baseline;
  }

  @media (max-width: 767px) {
    width: clamp(12rem, 20vw, 380px);
    align-self: center;
  }
`;
