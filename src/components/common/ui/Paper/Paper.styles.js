import styled from 'styled-components'
import { flexbox, layout, space } from 'styled-system'

import theme from 'theme'

export const StyledPaper = styled.div`
  border-radius: ${theme.borderRadius};
  background: ${({ theme }) => theme.colors.paper};
  width: fit-content;
  padding: ${theme.spacing()};
  display: flex;
  flex-direction: column;

  ${space}
  ${layout}
  ${flexbox}
`
