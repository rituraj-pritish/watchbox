import { lighten } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const ResultsContainer = styled.div`
  position: absolute;
  left: 0;
  // todo uncomment
  //top: 50px;
  background: ${({ theme }) => lighten(0.05, theme.colors.paper)};
  width: 100vw;
  height: 200px;
`
