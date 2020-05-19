/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components";

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const theme = {
  primary: "#554797",
  containerWidth: "1080px",
  mobileBreakpoint: "768px",
  gutter: "30px",
  gutterDesktop: "50px",
  
}

const MainWrapper = styled.div`
	width: 100%;
	max-width: ${props => props.theme.containerWidth};
	margin: 0 auto;
`

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
		site {
			siteMetadata {
			title
			}
		}
		}
	`)

	return (
    <ThemeProvider theme={theme}>
		<Header siteTitle={data.site.siteMetadata.title} />
			<MainWrapper>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</MainWrapper>
     </ThemeProvider>
  	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
