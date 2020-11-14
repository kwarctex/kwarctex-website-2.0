import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import LogoIcon from '../assets/svgs/logo.svg';

const LogoLinkStyles = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    width: 9rem;
    color: var(--white);
    text-decoration: none;
    cursor: pointer;
    svg {
        width: 14px;
        height: 14px;
    }
    span {
        font-size: 14px;
        font-weight: 700;
    }
`;

const Logo = () => {
    return (
        <LogoLinkStyles to='/'>
            <LogoIcon />
            <span>Kwarctex</span>
        </LogoLinkStyles>
    )
}

export default Logo;
