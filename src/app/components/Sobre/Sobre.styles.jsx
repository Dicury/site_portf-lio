"use client";

import Colors from "@/tokens/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${Colors.PRIMARIA};
  width: auto;
  justify-content: center;
  margin-top: 8vh;
  @media (max-width: 1360px) {
    margin: 0 5vw;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 1rem;
    gap: 2rem;
  }
`;

export const ContainerTopicos = styled.div`
  display: flex;
  text-align: right;
  border-right: solid 3px ${Colors.PRIMARIA};
  flex-direction: column;
  gap: 2rem;
  margin-right: 2rem;
  padding-right: 2rem;
  @media (max-width: 1360px) {
    margin-right: 0;
    gap: 2rem;
    padding-right: 1rem;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    gap: 2rem;
    padding-right: 1rem;
  }
`;

export const ContainerParagrafo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 600px;

  @media (max-width: 1360px) {
    width: 400px;
  }

  @media (max-width: 767px) {
    width: auto;
  }
`;

export const Titulos = styled.h3`
  font-weight: 700;
  font-size: 46px;
  @media (max-width: 1360px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Paragrafo = styled.p`
  text-align: justify;
  font-size: 20px;
  @media (max-width: 1360px) {
    font-size: 16px;
  }
`;

export const Topicos = styled(Paragrafo)`
  text-align: right;
  width: auto;
`;
