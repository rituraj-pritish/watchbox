import styled, { css } from 'styled-components'
import theme from 'theme'

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${({ extendedStyles }) => extendedStyles && extendedStyles};
`

export const ListContainer = styled.div`
  & > div {
    margin: ${theme.spacing()} 0;
  }
`

const getDimensions = factor => css`
  width: ${factor}vw;
  height: ${factor * 1.6}vw;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${theme.spacing()};

  & > div {
    width: 100%;
    height: 340px;
    
    @media (max-width: 1110px) {
      ${getDimensions(23)}
    }

    @media (max-width: 894px) {
      ${getDimensions(30)}
    }

    @media (max-width: 764px) {
      ${getDimensions(30)}
    }
  }

    @media (max-width: 678px) {
      grid-template-columns: repeat(3, 1fr);

      & > div {
        ${getDimensions(29)}
      }
    }

    @media (max-width: 540px) {
      grid-template-columns: repeat(2, 1fr);

      & > div {
        width: 100%;
        height: 65vw;
      }
    }

    @media (max-width: 420px) {
      & > div {
        ${getDimensions(43)}
      }
    }
`
