import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const fakeData = {
  siteTitle: "Dasha Kondratenko",
  siteCaption: 'frontend/UI developer',
}

const HeaderWrapper = styled.header`
	width: 100%;

	@media(min-width: calc(${props => props.theme.containerWidth} + 60px)) {
		width: calc(100% - (${props => props.theme.gutter} *2));
		margin: 0 ${props => props.theme.gutter};
	}
`

const HeaderInner = styled.div`
	padding: ${props => props.theme.gutter};
	text-align: right;

	@media(min-width: ${props => props.theme.containerWidth}) {
        padding: ${props => props.theme.gutter} 0;
    }
`

const Header = ({ siteTitle }) => (
  	<HeaderWrapper>
		<HeaderInner>
			<h1 style={{ margin: 0 }}>
        		{fakeData.siteTitle}
     		</h1>
      		<span>{fakeData.siteCaption}</span>
		</HeaderInner>
	</HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
