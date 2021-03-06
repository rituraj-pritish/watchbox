import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import theme from 'theme'
import { centerElement } from 'theme/commonStyles'

export const Wrapper = styled.div`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  ${centerElement};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => disabled && 0.8};
  border-radius: ${theme.borderRadius};

  svg {
    width: 100%;
    height: 100%;

    * {
      fill: ${({ theme, color }) => theme.colors[color] || color || theme.colors.textTertiary};
    }
  }


  ${({ size, isClickable, theme, circle }) => isClickable && css`
      padding: ${theme.spacing(0.5)};
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      background: ${({ theme }) => 
	theme.isDarkMode ? theme.colors.tertiary : lighten(0.1, theme.colors.tertiary)};
      border-radius: ${circle ? '50%' : theme.borderRadius};

      &:hover {
        background: ${theme.colors.tertiaryLight};
      }

      svg {
        width: ${ size + 'px'};
        height: ${ size + 'px'};
      }
  `};
  
  ${space};
`
