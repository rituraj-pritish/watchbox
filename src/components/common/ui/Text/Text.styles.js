import styled from 'styled-components'

import { space, typography } from 'styled-system'

export const StyledText = styled.div`
  color: ${({ theme, color }) => theme.colors.text[color] || theme.colors[color] || color};

  ${typography}
  ${space}
`

