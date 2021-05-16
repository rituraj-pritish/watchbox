import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  width: fit-content;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`
