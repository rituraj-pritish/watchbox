import Input from 'components/common/ui/Input'
import { lighten } from 'polished'
import styled from 'styled-components'
import theme from 'theme'

export const Wrapper = styled.div`
  position: relative;
`

export const StyledInput = styled(Input)`
  &:active, &:focus-visible {
    border: ${({ theme }) => `1px solid ${theme.isDarkMode ? '#b3b3b3' : '#7b7b7b'}`};
    outline: none;
  }
`

export const ResultsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  background: ${({ theme }) => lighten(0.05, theme.colors.paper)};
  width: 100vw;
  height: fit-content;

  & > div {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
  }
`

export const Results = styled.div`
  padding: ${theme.spacing(0.5)} ${theme.spacing()};
  max-height: 50vh;
  overflow: auto;
  
  // items
  & > div {
    margin: ${theme.spacing(0.25)} 0;
  }
`