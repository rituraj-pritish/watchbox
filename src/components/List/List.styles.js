import styled from 'styled-components'
import theme from 'theme'

export const ListContainer = styled.div`
  & > div {
    margin: ${theme.spacing()} 0;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${theme.spacing()};

  & > div {
    @media (min-width: 1143px) {
      height: 28vw;
      max-height: 350px;
    }

    width: 100%;
    height: 28vw;
  }
`
