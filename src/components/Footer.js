// Footer.js
import React from 'react';
import { FooterContainer, FooterText } from '../styles/FooterStyles';

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Bonk.lt. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
