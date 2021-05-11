import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Icon.styled'

const Icon = ({
	children, 
	size = 16,
	color
}) => {
	return (
		<Wrapper
			size={size}
			color={color}
		>
			{children}
		</Wrapper>
	)
}

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.number,
	color: PropTypes.string
}

export default Icon
