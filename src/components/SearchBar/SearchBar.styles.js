import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

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
  height: fit-content;

  // view all link
  & > div:nth-child(2) {
    padding-right: ${theme.spacing(2)};
  }

  // results content
  & > div {
    padding: ${theme.spacing(0.5)} ${theme.spacing()};
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    max-height: 50vh;
    overflow: auto;
    
    // items
    & > div {
      margin: ${theme.spacing(0.25)} 0;
    }
  }
`
