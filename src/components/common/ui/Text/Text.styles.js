import styled from 'styled-components'

import { color, space, typography } from 'styled-system'

export const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.text.white};

  ${space}
  ${typography}
  ${color}
`

