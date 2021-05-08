import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'
import { StyledLink } from './Link.styled'

const Link = ({
	children
}) => {
	return (
		<StyledLink>
			<Text color='secondary.main'>
				{children}
			</Text>
		</StyledLink>
	)
}

Link.propTypes = {
	children: PropTypes.node.isRequired
}

export default Link
