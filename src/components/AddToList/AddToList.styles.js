import styled from 'styled-components'
import theme from 'theme'

export const ListCard = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  border-radius: ${theme.borderRadius};
  margin-bottom: ${theme.spacing(0.5)};
  padding: ${theme.spacing()} ${theme.spacing()};
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`
