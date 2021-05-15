import styled from 'styled-components'

import { space, typography, layout } from 'styled-system'

export const StyledText = styled.div`
  color: ${({ theme, color }) => theme.colors.text[color] || theme.colors[color] || color};

  ${layout}
  ${typography}
  ${space}
`

