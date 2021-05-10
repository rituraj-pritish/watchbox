import React from 'react'
import PropTypes from 'prop-types'

import { BUTTON_VARIANTS, BUTTON_TYPES } from 'constants/buttons'
import { SpinnerWrapper, StyledButton } from './Button.styles'
import useTheme from 'hooks/useTheme'
import Text from '../Text'

const Button = ({
	variant = BUTTON_VARIANTS.PRIMARY,
	type = BUTTON_TYPES.DEFAULT,
	children,
	loading,
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
			{loading && <SpinnerWrapper>loading</SpinnerWrapper>}
			<Text color={loading ? 'transparent' : undefined}>
				{children}
			</Text>
		</StyledButton>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANTS)]),
	type: PropTypes.oneOf([...Object.values(BUTTON_TYPES)]),
	children: PropTypes.node.isRequired,
	loading: PropTypes.bool
}

export default Button
