import styled from 'styled-components'
import theme from 'theme'

export const StyledLink = styled.a`
  text-decoration: none;
  margin-left: ${theme.spacing(0.5)};
  color: ${({ theme }) => theme.colors.secondary};
`
