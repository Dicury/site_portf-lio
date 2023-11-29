"use client";

import React from "react";
import {
  Container,
  Icone,
  IconeLink,
} from "@/app/components/Footer/Footer.styles";

function Footer() {
  return (
    <Container id="contato">
      <IconeLink
        href="https://www.linkedin.com/in/mateus-cury-398962161/"
        target="blank"
      >
        <Icone src="/icones/Linkedin.svg" />
      </IconeLink>
      <IconeLink href="https://github.com/Dicury" target="blank">
        <Icone src="/icones/GitHub.svg" />
      </IconeLink>
      <IconeLink href="https://wa.me/5519998414801" target="blank">
        <Icone src="/icones/WhatsApp.svg" />
      </IconeLink>
      <IconeLink
        href="mailto:mateus.dicury@gmail.com?subject=&body="
        target="blank"
      >
        <Icone src="/icones/Email.svg" />
      </IconeLink>
    </Container>
  );
}

export default Footer;
