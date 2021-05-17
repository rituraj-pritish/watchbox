import { darken, lighten } from 'polished'
import styled from 'styled-components'

import theme from 'theme'
import { centerElement } from 'theme/commonStyles'

export const Wrapper = styled.div`
  display: flex;
  border-radius: ${theme.spacing(20)};
  height: 20px;
  width: 50px;
  background: ${({ theme, isDarkMode }) => isDarkMode
		? lighten(0.08, theme.colors.layout) : lighten(0.02, theme.colors.layout)};
  border: 1px solid ${({ theme, isDarkMode }) => isDarkMode
		? lighten(0.18, theme.colors.layout) : lighten(0.1, theme.colors.layout)};
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: ${theme.spacing()};
`

export const IconContainer = styled.div`
  ${centerElement}
  border-radius: 50%;
  background: grey;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  background: ${({ theme, isDarkMode }) => isDarkMode
		? darken(0.1, theme.colors.layout) : lighten(0.2, theme.colors.layout)};

  transform: ${({ isDarkMode }) => isDarkMode && 'translateX(20px)' };
  transition: all 0.3s;

  & > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme, isDarkMode }) => isDarkMode
		? lighten(0.4,theme.colors.layout) : darken(0.2, theme.colors.layout)};
  }
`
