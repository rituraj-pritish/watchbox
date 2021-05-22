import React from 'react'
import PropTypes from 'prop-types'

import { StyledText } from './Text.styles'

const Text = ({
	children,
	size = 2,
	bold = false,
	italic = false,
	align = 'left',
	color = 'textSecondary',
	elRef,
	...rest
}) => {
	return (
		<StyledText
			textAlign={align}
			fontWeight={bold ? 'bold' : undefined}
			fontStyle={italic ? 'italic' : undefined}
			fontSize={size}
			color={color}
			ref={elRef}

			{...rest}
		>
			{children}
		</StyledText>
	)
}

Text.propTypes = {
	elRef: PropTypes.object,
	children: PropTypes.node.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	color: PropTypes.string,
	align: PropTypes.string,
	maxLines: PropTypes.number
}

export default Text
