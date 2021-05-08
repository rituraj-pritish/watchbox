import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { BUTTON_TYPES, BUTTON_VARIANTS } from 'constants/buttons'
import theme from 'theme'

const getColor = (variant, type, theme) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return getBgColor(variant, BUTTON_TYPES.DEFAULT, theme)
	} else {
		if (variant === BUTTON_VARIANTS.SECONDARY) {
			return theme.colors.text.black
		} else {
			return theme.colors.text.white
		}
	}
}

const getBgColor = (variant, type, theme) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return theme.colors.appBg
	} else {
		switch(variant) {
		case BUTTON_VARIANTS.SECONDARY:
			return theme.colors.secondary.main
    
		case BUTTON_VARIANTS.DANGER:
			return theme.colors.danger

		case BUTTON_VARIANTS.CANCEL:
			return theme.colors.grey.dark

		default: return theme.colors.primary.main
		}
	}
}

export const StyledButton = styled.div`
	border-radius: ${theme.borderRadius};
	width: fit-content;
	font-weight: bold;
	cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
	box-sizing: border-box;

	${({ theme, variant, type }) => {
		const bgColor = getBgColor(variant, type, theme)
		const color = getColor(variant, type, theme)

		return css`
			background: ${bgColor};
			color: ${color};
			box-shadow: ${type === BUTTON_TYPES.OUTLINED ? `0 0 0 2px ${color}` : 'none'};
		`
	} 
}
	
	${space}
`
