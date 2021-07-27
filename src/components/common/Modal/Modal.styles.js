import styled from 'styled-components'
import theme from 'theme'

export const Trigger = styled.div`
  cursor: pointer;
`

export const Header = styled.div`
  padding-right: ${({ showCloseIcon }) => showCloseIcon && theme.spacing(2)};
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`

export const Footer = styled.div`
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`

export const Content = styled.div`
  overflow: auto;
  flex-grow: 1;
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`