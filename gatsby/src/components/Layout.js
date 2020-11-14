import React from 'react';
import 'normalize.css';
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Hero from './Hero';

const Layout = ({ children }) => {
    console.log(children.props.location.pathname);
    const pathname = children.props.location.pathname;
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Header />    
            <Hero />
                { children }
            <Footer />
        </div>
    )
}

export default Layout;
