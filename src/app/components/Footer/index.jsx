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
      <IconeLink href="/">
        <Icone src="/icones/Linkedin.svg" />
      </IconeLink>
      <IconeLink href="/">
        <Icone src="/icones/GitHub.svg" />
      </IconeLink>
      <IconeLink href="/">
        <Icone src="/icones/WhatsApp.svg" />
      </IconeLink>
      <IconeLink href="/">
        <Icone src="/icones/Email.svg" />
      </IconeLink>
    </Container>
  );
}

export default Footer;
