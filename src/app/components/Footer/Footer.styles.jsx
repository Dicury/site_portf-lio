"use client";

import Colors from "@/tokens/colors";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${Colors.SECUNDARIA};
  margin-top: 8vh;
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  padding-left: 13vw;
  gap: 1rem;

  @media (max-width: 1360px) {
    margin-top: 2rem;
  }

  @media (max-width: 767px) {
    margin-top: 2rem;
    height: 50px;
    justify-content: center;
    padding-left: 0;
  }
`;

export const IconeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icone = styled.img`
  height: 50px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 767px) {
    height: 40px;
  }
`;
