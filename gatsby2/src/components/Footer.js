import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  text-align: center;
  color: var(--off-white);
  background-color: var(--off-black);
`;

const Footer = () => (
  <FooterStyles>
    <p>&copy; notes.dot.kitchen {new Date().getFullYear()}</p>
  </FooterStyles>
);

export default Footer;
