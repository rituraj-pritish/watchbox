import styled, { css } from 'styled-components'
import { flexbox, layout, space, typography } from 'styled-system'

const FlexBox = styled.div`
  display: flex;

  ${({ centerElement }) => centerElement && css`
    align-items: center;
    justify-content: center;
  `};

  ${typography}
  ${layout}
  ${flexbox}
  ${space}
`

export default FlexBox
