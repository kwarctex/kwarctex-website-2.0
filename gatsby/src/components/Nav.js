import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const NavStyles = styled.nav`

    padding: 2.5rem 7rem;

    ul {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 2fr;

        margin: 0;
        padding: 0;

        text-align: center;
        list-style: none;
    }

    li {
        :first-child {
            text-align: left;
        }

        :last-child {
            text-align: right;
        }
    }

    a {
        text-decoration: none;
        font-weight: 600;
        &:hover {
            color: red;
        }
    }

    svg {
        width: 5rem;
        transform: translateY(-5rem);
    }
`;

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to='/'><Logo /></Link>
                </li>
                <li>
                    <Link to='/o-nas'>O nas</Link>
                </li>
                <li>
                    <Link to='/produkty'>Konglomeraty</Link>
                </li>
                <li>
                    <Link to='/realizacje'>Realizacje</Link>
                </li>
                <li>
                    <Link to='/kontakt'>Kontakt</Link>
                </li>
            </ul>  
        </NavStyles>
    )
}

export default Nav;
