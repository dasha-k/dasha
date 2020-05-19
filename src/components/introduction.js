import React from "react"
import styled from 'styled-components'
import Avatar from "./avatar"

import JSONData from "../../content/Introduction-JSON-Content.json"

const Section = styled.section`
    margin: 0;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        margin: 50px 0;
    }
`

const IntroductionContainer = styled.div`
    width: calc(100% - 60px);
    position: relative;
    background: #FFF8F6;
    padding: ${props => props.theme.gutter} 0;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        padding: ${props => props.theme.gutterDesktop};
        width: 80%;
    }
    
`

const IntroductionTitle = styled.div`
    color: ${props => props.theme.primary};
    padding: 0 ${props => props.theme.gutter};

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        padding: ${props => props.theme.gutter};
        position: absolute;
        top: 0;
        transform: translateY(-50%);;
    }
`

const IntroductionText = styled.div`
    width: 100%;
    padding: ${props => props.theme.gutter} ${props => props.theme.gutter} 0;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        width: 80%;
    }
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    margin-bottom: 0;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        font-size: 1.3rem;
    }
`

const IntroductionImage = styled.div`
    width: 100%;
    transform: translateX(60px);
    padding: ${props => props.theme.gutter};

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        max-width: 300px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
    }
`

const Introduction = () => {
    return (
        <Section>
           <IntroductionContainer>
                <IntroductionTitle>
                    <h2>{JSONData.title}</h2>
                </IntroductionTitle>
                <IntroductionText>
                    <Paragraph>{JSONData.content.paragraph1}</Paragraph>
                </IntroductionText>
                <IntroductionImage>
                    <Avatar />
                </IntroductionImage>
                <IntroductionText>
                    <Paragraph>{JSONData.content.paragraph2}</Paragraph>
                </IntroductionText>
                <IntroductionText>
                    <Paragraph>{JSONData.content.paragraph3}</Paragraph>
                </IntroductionText>
           </IntroductionContainer>  
        </Section>
    )
}

export default Introduction