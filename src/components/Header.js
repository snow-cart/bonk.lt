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
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="https://ftp.bonk.lt">FTP</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
            </Navigation>
        </HeaderContainer>
    );
}

export default Header;
