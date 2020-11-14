import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Nav from './Nav';

const HeroStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 80vh;
    background-color: var(--black);
`;

const HeroContainerStyles = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 70%; 
`;

const CorouselStyles = styled.div`
width: 50rem;
height: 70vh;
transform: translateX(-12rem);
overflow: hidden;
`;

const CorouselWrapperStyles = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 25rem);
    align-items: center;
    gap: 4rem;
    transform: ${({val}) => `translateX(${val}rem)`};
    transition: transform .5s ease-in;
`;

const CorouselItemStyles = styled.li`
        height: 35rem;
        background-color: var(--red);
        transition: transform 1s ease-in;    
`;

const Hero = () => {
    const [val, setVal] = useState(0);
    if (val < -116) setVal(0);
    useEffect(() => {
        const interval = setInterval(()=>{
            setVal((prevState) => (prevState-29));
         }, 4000);
         return () => clearInterval(interval);

    }, [])  
    const courouselItems = [1,2,3,4,5];
    return (
        <HeroStyles>
            <HeroContainerStyles>
                <CorouselStyles>
                    <CorouselWrapperStyles val={val}>
                        {courouselItems.map(num => <CorouselItemStyles>{num}</CorouselItemStyles>)}
                    </CorouselWrapperStyles>
                </CorouselStyles>
                <Nav />
            </HeroContainerStyles>
        </HeroStyles>
    )
}

export default Hero;
