import styled from 'styled-components'
import { space } from 'styled-system'

import { centerElement } from 'theme/commonStyles'

export const Wrapper = styled.div`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  ${centerElement};
  cursor: ${({ isClickable }) => isClickable && 'pointer'};

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ theme, color }) => theme.colors[color] || color};
    }
  }

  ${space};
`
