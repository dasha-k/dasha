import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import reduxIcon from './redux_icon.svg'
import reactIcon from './react_icon.svg'
import graphqlIcon from './graphql_icon.svg'

import ArrowIcon from '../icons/arrow_icon.svg'

import JSONData from "../../content/Projects-JSON-Content.json"

const icons = {
    react: reactIcon,
    redux: reduxIcon,
    graphql: graphqlIcon,
}

const Section = styled.section`
    margin: 50px 0;
`

const ProjectsTitle = styled.div`
    color: ${props => props.theme.primary};
    text-align: right;
    padding: 0 ${props => props.theme.gutter};

    @media(min-width: ${props => props.theme.containerWidth}) {
        padding: 0;
    }
`

const ProjectSection = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 ${props => props.theme.gutter};

    ::after {
        content: '';
        position: absolute;
        width: 70%;
        top: 0;
        bottom: 0;
        right: ${props => props.sectionLeft ? "auto" : "0"};
        left: ${props => props.sectionLeft ? "0" : "auto"};
        background: ${props => props.sectionLeft ? "#EFFCFA" : "#FBF7ED"};
        z-index: -1;
    }

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        padding: ${props => props.theme.gutterDesktop};
    }
`

const ProjectDescription = styled.div`
    padding: 0 ${props => props.theme.gutter} ${props => props.theme.gutter};;
    align-self: center;
    width: 100%;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        width: 40%;
        padding: ${props => props.theme.gutter};
    }
`
// margin: ${props => props.sectionLeft ? "0 auto 0 0" : "0 0 0 auto"};

const ProjectImage = styled.div`
    width: 100%;
    margin: ${props => props.theme.gutter};
    padding: calc(${props => props.theme.gutter} / 2);
    box-shadow: 0 0 10px 0 #d2d5d9;
    background: white;
    border-radius: 5px;
    overflow: hidden;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        width: 45%;
        margin: 0 auto;
        padding: ${props => props.theme.gutter};
        order: ${props => props.sectionLeft ? "1" : "0"};
        
    }
`

const ProjectName = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

    @media(min-width: ${props => props.theme.mobileBreakpoint}) {
        font-size: 2.25rem;
    }

`

const Icon = styled.img`
    height: 30px;
    margin-right: 10px;
`

const ProjectLink = styled.a`
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 1.5rem;

    svg {
        margin-left: 5px;
        transition: all .2s ease-in;
    }

    :hover {
        svg {
            transform: translateX(5px);
        }
    }
`

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            shopifyApp: file(relativePath: { eq: "shopify-app.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cameraSimulator:  file(relativePath: { eq: "camera-simulator.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shopifyTheme: file(relativePath: { eq: "shopify-theme.png"}) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Section>
            <ProjectsTitle>
                <h2>{JSONData.title}</h2>
            </ProjectsTitle>
            {JSONData.projects.map((el, index) => {
                const sectionLeft = index % 2 !== 0;

                return (
                    <ProjectSection sectionLeft={sectionLeft} key={el}>
                        <ProjectImage sectionLeft={sectionLeft}>
                            <Img fluid={data[el.image].childImageSharp.fluid} />
                        </ProjectImage>
                        <ProjectDescription>
                            <ProjectName>{el.name}</ProjectName>
                            {el.tech &&
                                <p>Made with</p>
                            }
                            {el.tech && el.tech.map(el => {
                                return (
                                    <Icon src={icons[el]} alt={`logo ${el}`} key={el} />
                                )
                            })}
                            <ProjectLink href={el.buttonLink} target="blank">
                                {el.buttonLabel}
                                <ArrowIcon />
                            </ProjectLink>
                            {el.comment && 
                                <span>{el.comment}</span>
                            }
                        </ProjectDescription>
                    </ProjectSection>
                )
            })}
        </Section>
    )

}

export default Projects