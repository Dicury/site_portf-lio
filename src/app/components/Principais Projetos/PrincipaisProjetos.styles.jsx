"use client";

import styled from "styled-components";
import Colors from "@/tokens/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
  gap: 8vh;

  @media (max-width: 1360px) {
    margin: 2rem 5vw;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    align-items: center;
    margin: 2rem 1rem;
    gap: 2rem;
  }
`;

export const Titulo = styled.h2`
  font-size: 46px;
  margin-left: 3rem;
  color: ${Colors.PRIMARIA};

  @media (max-width: 1360px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    margin-left: 2rem;
    align-self: flex-start;
  }
`;
