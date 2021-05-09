import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'
import { StyledLink } from './Link.styled'

const Link = ({
	children,
	...rest
}) => {
	return (
		<Text color='secondary' {...rest}>
			<StyledLink>
				{children}
			</StyledLink>
		</Text>
	)
}

Link.propTypes = {
	children: PropTypes.node.isRequired
}

export default Link
