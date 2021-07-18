import { darken, lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const Wrapper = styled.div`
  position: relative;
`

export const Trigger = styled.div`
  width: fit-content;
  cursor: pointer;
`

export const Menu = styled.div`
  position: absolute;
  right: 0;
  z-index: 8;
  padding: ${theme.spacing(0.25)} 0;
  background: ${({ theme }) => theme.colors.tertiary};
  width: fit-content;
  border-radius: ${theme.borderRadius};
  margin-top: ${theme.spacing(0.5)};

  & > *:not(hr) {
    padding: ${theme.spacing(0.4)} ${theme.spacing()};;
    margin: ${theme.spacing(0.1)} 0;
    cursor: pointer;
    
    &:hover {
      background: ${({ theme }) => theme.colors.tertiaryLight};
    }
  }

  & > hr {
    border: 1px solid ${({ theme }) => theme.isDarkMode 
	? lighten(0.1, theme.colors.tertiary) :
	darken(0.1, theme.colors.tertiary)};
  }
`

export const Options = styled.div`
  
`

export const Option = styled.div`
  
`
