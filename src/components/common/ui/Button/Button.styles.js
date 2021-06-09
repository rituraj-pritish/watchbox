import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { BUTTON_TYPES, BUTTON_VARIANTS } from 'constants/buttons'
import theme from 'theme'
import { centerElement } from 'theme/commonStyles'
import { darken, lighten } from 'polished'

export const getColor = (variant, type, theme, isDarkMode) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return getBgColor(variant, BUTTON_TYPES.DEFAULT, theme)
	} else {
		if (variant === BUTTON_VARIANTS.SECONDARY) {
			return isDarkMode ? theme.colors.black : theme.colors.white
		} else {
			return theme.colors.white
		}
	}
}

const getBgColor = (variant, type, theme) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return theme.colors.appBg
	} else {
		switch(variant) {
		case BUTTON_VARIANTS.SECONDARY:
			return theme.colors.secondary
    
		case BUTTON_VARIANTS.DANGER:
			return theme.colors.danger

		case BUTTON_VARIANTS.CANCEL:
			return theme.colors.cancel

		default: return theme.colors.primary
		}
	}
}

export const StyledButton = styled.div`
	position: relative;
	border-radius: ${theme.borderRadius};
	width: fit-content;
	height: fit-content;
	font-weight: bold;
	cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
	box-sizing: border-box;

	${({ theme, variant, type, isDarkMode, isLoading }) => {
	const bgColor = getBgColor(variant, type, theme)
	const color = getColor(variant, type, theme, isDarkMode)

	return css`
			background: ${bgColor};
			color: ${color};
			box-shadow: ${type === BUTTON_TYPES.OUTLINED ? `0 0 0 2px ${color}` : 'none'};

			&:hover {
				background: ${!isLoading && lighten(0.05, bgColor)};
			}

			&:active {
				background: ${!isLoading && darken(0.03, bgColor)};
			}
		`
} 
}

	${({ isLoading }) => isLoading && css`
		cursor: not-allowed;
		opacity: 0.7;
	`};

	${space}
`

export const SpinnerWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	${centerElement};
`