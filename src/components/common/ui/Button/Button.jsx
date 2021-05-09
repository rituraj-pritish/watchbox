import React from 'react'
import PropTypes from 'prop-types'

import { BUTTON_VARIANTS, BUTTON_TYPES } from 'constants/buttons'
import { StyledButton } from './Button.styles'
import useTheme from 'hooks/useTheme'

const Button = ({
	variant = BUTTON_VARIANTS.PRIMARY,
	type = BUTTON_TYPES.DEFAULT,
	children,
	...rest
}) => {
	const { isDarkMode } = useTheme()

	return (
		<StyledButton
			variant={variant}
			type={type}
			isDarkMode={isDarkMode}
			{...rest}
		>
			{children}
		</StyledButton>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANTS)]),
	type: PropTypes.oneOf([...Object.values(BUTTON_TYPES)]),
	children: PropTypes.node.isRequired
}

export default Button
