import styled from 'styled-components'
import theme from 'theme'

export const Title = styled.div`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing()};
  font-size: ${theme.spacing(1.7)};
`

export const Wrapper = styled.div`
  /* height: 400px;

  .slick-slider {
    height: 100%;
  }

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  } */

  .slick-slide {
    display: flex;
    justify-content: center;
    /* width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;
      & > div {
        width: 100%;
        height: 100%;
      }
    } */
  }

  // arrows
  .slick-arrow {
    z-index: 1;
    background: black;
    height: 100%;
    width: ${theme.spacing(2)};
    opacity: 0.3;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }
`
