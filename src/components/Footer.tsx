"use client";

import {
  FooterContainer,
  FooterText,
  FooterHighlight,
} from "./styles/Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        <FooterHighlight>Andreza Sousa</FooterHighlight>, desenvolvedora
        front-end jr - {currentYear}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
