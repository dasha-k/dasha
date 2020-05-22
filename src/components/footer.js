import React from "react"
import styled from 'styled-components'

import github from './github_icon.svg'
import linkedin from './linkedin_icon.svg'
import email from './mail_icon.svg'
import sgd from './sgd_icon.svg'

const FooterInner = styled.div`
    background: ${props => props.theme.primary};
    color: white;
    width: 100%;
    padding: ${props => props.theme.gutter} ${props => props.theme.gutter} 10px;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        padding: ${props => props.theme.gutterDesktop} ${props => props.theme.gutterDesktop} 10px;
    }
`

const FooterTitle = styled.div`
    color: ${props => props.theme.primary};
    padding: calc(${props => props.theme.gutter} / 2) ${props => props.theme.gutter};
    text-align: center;
`

const IconsContainer = styled.div`
    margin: 50px 0 100px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`

const Contact = styled.a`
    margin: calc(${props => props.theme.gutter} / 2);
    display: inline-block;
`

const Icon = styled.img`
    margin: 0;
    width: 30px;
`

const Paragraph = styled.p`
    margin: 0 0 30px 0;
    font-size: 1.1rem;
    align-self: center;
    max-width:  ${props => props.theme.mobileBreakpoint};

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        font-size: 1.3rem;
    }
`

const contacts = {
    'github': {icon: github, link: 'https://github.com/dasha-k'},
    'linkedin': {icon: linkedin, link: 'https://www.linkedin.com/in/dasha-k/'},
    'email': {icon: email, link: 'mailto:dashakondrattenko@gmail.com'},
    // 'sgd': {icon: sgd, link: 'https://smallgreendoor.com/'},
}

const Footer = () => {
    return (
        <>
            <FooterTitle>
                <h2>Get in touch</h2>
            </FooterTitle>
            <FooterInner>
                <IconsContainer>
                    <Paragraph>I’m always looking to work on new and exciting projects! Feel free to contact me with any development opportunities.</Paragraph>
                    <div>
                        {Object.keys(contacts).map(el => {
                            return (
                                <Contact key={el} href={contacts[el].link} target="blank">
                                    <Icon src={contacts[el].icon} alt={`${el} icon`} />
                                </Contact>
                            )
                        })}
                    </div>
                </IconsContainer>
                © {new Date().getFullYear()}, dashakondratenko
            </FooterInner>
        </>
    )
}

export default Footer;