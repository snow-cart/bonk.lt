// Header.js
import React from 'react';
import { 
        HeaderContainer,
        TitleContainer, 
        Title, 
        Navigation, 
        NavLink,
        Logo
} from '../styles/HeaderStyles';
import logo from "../images/logo192.png"

function Header() {
    return (
        <HeaderContainer>
            <TitleContainer>
                {/* <Logo src={logo} alt="Bonk.lt Logo"/> */}
                <Title>Bonk.lt</Title>
            </TitleContainer>
            <Logo/>
 
            <Navigation>
                <NavLink href="/">Pagrindinis</NavLink>
                <NavLink href="/about">Apie</NavLink>
                <NavLink href="https://ftp.bonk.lt">Saugykla</NavLink>
                <NavLink href="/contact">Kontaktai</NavLink>
            </Navigation>
        </HeaderContainer>
    );
}

export default Header;
