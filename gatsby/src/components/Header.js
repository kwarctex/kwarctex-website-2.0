import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo'
import YoutubeLogo from '../assets/svgs/logo-youtube.svg';
import FacebookLogo from '../assets/svgs/logo-facebook.svg';
import InstagramLogo from '../assets/svgs/logo-instagram.svg';

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between; 
    padding: 2rem 4rem;
    background-color: var(--black);
`;

const SocialIconsStyles = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15rem;

    & > * {
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <HeaderStyles>
            <Logo />
            <SocialIconsStyles>
                <YoutubeLogo />
                <FacebookLogo />
                <InstagramLogo />
            </SocialIconsStyles>
        </HeaderStyles>
    )
}

export default Header
