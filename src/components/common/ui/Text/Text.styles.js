import styled, { css } from 'styled-components'

import { space, typography, layout } from 'styled-system'
import theme from 'theme'

export const StyledText = styled.div`
  color: ${({ theme, color }) => theme.colors[color] || color};
  line-height: ${theme.spacing(1.25)};

  ${({ maxLines }) => maxLines && css`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${maxLines};
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `};

  ${({ capitalize }) => capitalize && css`
    text-transform: capitalize;
  `};

  ${layout}
  ${typography}
  ${space}
`

