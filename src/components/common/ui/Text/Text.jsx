import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styles'

const Text = ({
	children,
	size = 2,
	bold = false,
	italic = false,
	align = 'left',
	color = 'text.secondary',
	...rest
}) => {
	return (
		<StyledText
			textAlign={align}
			fontWeight={bold ? 'bold' : undefined}
			fontStyle={italic ? 'italic' : undefined}
			fontSize={size}
			color={color}
			{...rest}
		>
			{children}
		</StyledText>
	)
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	color: PropTypes.string,
	align: PropTypes.string
}

export default Text
