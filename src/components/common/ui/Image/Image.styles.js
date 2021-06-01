import styled from 'styled-components'
import { layout, space } from 'styled-system'
import theme from 'theme'

export const Background = styled.div`
  background-image: ${({ url, fallback }) => `url(${url || fallback})`};
  height: ${({ height }) => isNaN(height) ? height : (height + 'px')};
  width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  min-width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  border-radius: ${({ circle }) => circle ? '50%' : theme.borderRadius};
  background-position: center;
  background-size: cover;

  ${layout}
  ${space}
`
