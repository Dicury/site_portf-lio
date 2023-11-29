"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollLink = styled(Link)`
  scroll-behavior: smooth;
  position: fixed;
  right: 0;
  bottom: 5%;
  z-index: 300;
`;

const Img = styled.img`
  width: 100px;

  @media (max-width: 767px) {
    width: 50px;
  }
`;

function ScrollTopo() {
  const [valorScrollY, setValorScrollY] = useState(0);
  const onScroll = (event) => {
    setValorScrollY(window.scrollY);
  };

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      {valorScrollY > 300 && (
        <ScrollLink href="#topo">
          <Img src="/icones/seta.svg" />
        </ScrollLink>
      )}
    </>
  );
}

export default ScrollTopo;
