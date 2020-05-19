import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const fakeData = {
  siteTitle: "Dasha Kondratenko",
  siteCaption: 'frontend/UI developer',
}

const HeaderInner = styled.div`
	margin: 0px auto;
	max-width: ${props => props.theme.containerWidth};
	padding: ${props => props.theme.gutter};
	text-align: right;

	@media(min-width: ${props => props.theme.containerWidth}) {
        padding: ${props => props.theme.gutter} 0;
    }
`

const Header = ({ siteTitle }) => (
  	<header>
		<HeaderInner>
			<h1 style={{ margin: 0 }}>
        		{fakeData.siteTitle}
     		</h1>
      		<span>{fakeData.siteCaption}</span>
		</HeaderInner>
	</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
