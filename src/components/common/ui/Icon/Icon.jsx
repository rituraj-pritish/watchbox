import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Icon.styled'

const Icon = ({
	children, 
	size = 16,
	color,
	className,
	onClick,
	...rest
}) => {
	return (
		<Wrapper
			size={size}
			color={color}
			className={className}
			onClick={onClick}
			{...rest}
		>
			{children}
		</Wrapper>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
	onClick: PropTypes.func
}

export default Icon
