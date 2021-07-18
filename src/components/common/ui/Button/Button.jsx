import React from 'react'
import PropTypes from 'prop-types'
import { Ring } from 'react-spinners-css'

import { BUTTON_VARIANTS, BUTTON_TYPES } from 'constants/buttons'
import { SpinnerWrapper, StyledButton, getColor } from './Button.styles'
import useTheme from 'hooks/useTheme'
import Text from '../Text'

const Button = ({
	variant = BUTTON_VARIANTS.PRIMARY,
	type = BUTTON_TYPES.DEFAULT,
	children,
	isLoading = false,
	...rest
}) => {
	const { theme } = useTheme()

	return (
		<StyledButton
			variant={variant}
			type={type}
			isLoading={isLoading}
			role='button'
			{...rest}
		>
			{isLoading && (
				<SpinnerWrapper>
					<Ring
						size={28}
						color={getColor(variant, type, theme)}
					/>
				</SpinnerWrapper>
			)}
			<Text color={isLoading && 'transparent'}>{children}</Text>
		</StyledButton>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANTS)]),
	type: PropTypes.oneOf([...Object.values(BUTTON_TYPES)]),
	children: PropTypes.node.isRequired,
	isLoading: PropTypes.bool
}

export default Button
