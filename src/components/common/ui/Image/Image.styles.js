import styled from 'styled-components'
import { space } from 'styled-system'
import theme from 'theme'

export const Background = styled.div`
  background: ${({ url }) => `url(${url})`};
  height: ${({ height }) => isNaN(height) ? height : (height + 'px')};
  width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  min-width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  border-radius: ${theme.borderRadius};
  background-position: center;
  background-size: cover;

  ${space}
`
