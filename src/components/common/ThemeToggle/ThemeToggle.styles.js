import { darken, lighten } from 'polished'
import styled from 'styled-components'

import theme from 'theme'
import { centerElement } from 'theme/commonStyles'

export const Wrapper = styled.div`
  display: flex;
  border-radius: ${theme.spacing(20)};
  height: 16px;
  width: 38px;
  background: ${({ theme }) => theme.isDarkMode
	? lighten(0.08, theme.colors.layout) : lighten(0.02, theme.colors.layout)};
  border: 1px solid ${({ theme }) => theme.isDarkMode
		? lighten(0.18, theme.colors.layout) : lighten(0.1, theme.colors.layout)};
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: ${theme.spacing()};
`

export const IconContainer = styled.div`
  ${centerElement}
  border-radius: 50%;
  background: grey;
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: absolute;
  background: ${({ theme }) => theme.isDarkMode
	? darken(0.1, theme.colors.layout) : lighten(0.2, theme.colors.layout)};

  transform: ${({ theme }) => theme.isDarkMode && 'translateX(15px)' };
  transition: all 0.3s;

  & > svg {
    width: 14px;
    height: 14px;
    fill: ${({ theme }) => theme.isDarkMode
		? lighten(0.4,theme.colors.layout) : darken(0.2, theme.colors.layout)};
  }
`
