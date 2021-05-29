import styled from 'styled-components'
import theme from 'theme'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const AppContent = styled.div`
  flex-grow: 1;
  max-width: ${theme.maxWidth};
  padding: ${theme.spacing()};
  margin: 0 auto;
  width: calc(100% - ${theme.spacing(2)});
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`