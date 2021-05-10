import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styles'

const Text = ({
	children,
	size = 2,
	bold = false,
	italic = false,
	...rest
}) => {
	return (
		<StyledText
			fontWeight={bold ? 'bold' : undefined}
			fontStyle={italic ? 'italic' : undefined}
			fontSize={size}
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
	italic: PropTypes.bool
}

export default Text
