import styled from 'styled-components'
import theme from 'theme'

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${theme.spacing()};

  & > div {
    width: auto;
    min-width: 100%;
  }
`
