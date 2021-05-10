import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'
import { StyledLink } from './Link.styles'

const Link = ({
	children,
	to,
	...rest
}) => {
	return (
		<Text
			color='secondary'
			{...rest}
		>
			<StyledLink to={to}>
				{children}
			</StyledLink>
		</Text>
	)
}

Link.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired
}

export default Link
