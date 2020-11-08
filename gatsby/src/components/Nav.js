import React from 'react'
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>LOGO</Link>
                </li>
                <li>
                    <Link to='/o-nas'>O nas</Link>
                </li>
                <li>
                    <Link to='/produkty'>Produkty</Link>
                </li>
                <li>
                    <Link to='/realizacje'>Realizacje</Link>
                </li>
                <li>
                    <Link to='/kontakt'>Kontakt</Link>
                </li>
            </ul>  
        </nav>
    )
}

export default Nav;
