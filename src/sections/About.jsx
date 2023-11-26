import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;   
    display: flex;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-family: 'Kaushan Script';
    font-weight: 300;

    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`

const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 20%;
`

const Right = styled.div`
    width: 50%;
`

const About = () => {

    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                About Us
            </Title>
            <Left>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestiae iusto odio alias inventore iure blanditiis, a rem ipsa incidunt. Quibusdam molestiae laborum, corrupti voluptate magni iusto maxime aperiam neque non vel quod fugit ducimus consequatur ex laudantium sed repellendus.
            </Left>
            <Right>
                Text
            </Right>
        </Section>
    )
}

export default About