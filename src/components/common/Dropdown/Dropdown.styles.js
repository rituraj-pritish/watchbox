import { darken, lighten } from 'polished'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from 'theme'

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;

  ${space};
`

export const Trigger = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: ${theme.spacing(0.5)} ${theme.spacing()};
  display: flex;
  border-radius: ${theme.borderRadius};
  
  &:hover {
    background: ${({ theme, isDarkMode }) => isDarkMode
		? lighten(0.03, theme.colors.tertiary) : darken(0.03, theme.colors.tertiary)};
  }
`

export const Menu = styled.div`
  margin-top: ${theme.spacing(0.5)};
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.3)} 0;
  z-index: 5;
`

export const Option = styled.div`
  padding: ${theme.spacing(0.5)} ${theme.spacing()};
  text-align: center;
  cursor: pointer;
  background: ${({ theme, selected }) => selected && theme.colors.selection};

  &:hover {
    background: ${({ theme, selected }) => !selected && theme.colors.tertiaryLight};
  }
`
