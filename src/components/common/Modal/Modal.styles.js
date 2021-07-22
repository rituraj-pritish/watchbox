import styled from 'styled-components'

export const Trigger = styled.div`
  cursor: pointer;
`

export const Header = styled.div`
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`

export const Footer = styled.div`
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`

export const Content = styled.div`
  overflow: auto;
  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`