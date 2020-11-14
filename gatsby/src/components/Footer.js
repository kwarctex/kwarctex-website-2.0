import React from 'react'
import styled from 'styled-components';
import LogoIcon from '../assets/svgs/logo.svg';
import ArrowIcon from '../assets/svgs/arrow.svg';
import { Link } from 'gatsby';

const FooterStyles = styled.footer`
    height: 40vh;
    background-color: var(--black);
    color: var(--white);
    padding: 0 10rem;

    ul {
        display: grid;
        grid-template-columns: 10rem 1fr 1fr 1fr 2fr;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        list-style: none;
        height: 100%;
    }

    h3 {
        font-size: 12px;
        color: var(--darkGrey);    
        margin-bottom: 2rem;
    }

    li {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        height: 15rem;
        gap: 8px;
    }

    li:nth-child(3) {
        margin-left: 3rem;
    }

    li:last-child {
        justify-self: flex-end;
    }

    a {
        color: var(--white);
    }
`;

const ContactUsLinkStyles = styled(Link)`
    position: relative;
    width: 20rem;
    height: 10rem;
    border: 1px solid var(--white);

    h3 {
        position: absolute;
        left: 10px;
        bottom: 10px;
        margin: 0;
        color: var(--white);
    }

    svg {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <ul>
                <li><LogoIcon/></li>
                <li>
                    <h3>Kontakt</h3>
                    <span>123 456 789</span>
                    <span>biuro.kwarctex@gmail.com</span>
                    <span>
                        Przemysłowa 4,<br/>
                        10-454<br/>
                        Nowy Dwór Mazowiecki
                    </span>
                </li>
                <li>
                    <h3>Kwarctex</h3>
                    <Link to='/'>Strona główna</Link>
                    <Link to='/konglomeraty'>Konglomeraty</Link>
                    <Link to='/realizacje'>Realizacje</Link>
                    <Link to='/dostawa'>Dostawa</Link>
                </li>
                <li>
                    <h3>Media społecznościowe</h3>
                    <Link>Youtube</Link>
                    <Link>Facebook</Link>
                    <Link>Instagram</Link>
                </li>
                <li>
                    <ContactUsLinkStyles to="/">
                        <h3>Napisz do nas</h3>
                        <ArrowIcon />
                    </ContactUsLinkStyles>
                </li>
            </ul>
            {/* <p>&copy; {new Date().getFullYear()} Kwarctex Sp. z o.o.</p> */}
        </FooterStyles>
    )
}

export default Footer;
