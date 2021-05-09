import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > div:nth-child(2) {
    flex-grow: 1;
  }
`
