import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MENU__ITEMS } from '../utils/MenuItems';

const NavStyles = styled.nav`
    width: 59%;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%); */
    justify-self: flex-start;
    ul {
        list-style: none;
    }
    li {
        margin-bottom: 1.5rem;
    }
    a {
        font-size: 3rem;
        font-size: clamp(2.5rem, 2.5vw, 3.5rem);
        color: var(--white);
        text-decoration: none;
        font-weight: 600;
        text-transform: capitalize;
        &[aria-current="page"] {
            font-size: 5rem;
            font-size: clamp(3rem, 4vw, 5rem);
            background-color: var(--grey);
            color: var(--black);
            padding: 6px;
            text-transform: uppercase;
        }
    }
`;

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                {MENU__ITEMS.map(item => <li><Link to={item.link}>{ item.name }</Link></li>)}
            </ul>  
        </NavStyles>
    )
}

export default Nav;
