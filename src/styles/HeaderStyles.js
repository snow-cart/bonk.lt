import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 50px; /* Adjust the width of the logo as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add some spacing between the logo and title */
  border-radius: 30%; /* Add rounding to create a circular shape */
`;

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: row;
`;