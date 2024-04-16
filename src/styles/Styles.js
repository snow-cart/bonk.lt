// HeaderStyles.js
import styled from 'styled-components';
import { FooterContainer } from './FooterStyles';
import { HeaderContainer } from './HeaderStyles';

export const GenericSite = styled.div`
    margin-top: 6.5vw;
    margin-bottom: calc(${FooterContainer}.height + 20px);
`;