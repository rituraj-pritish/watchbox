import styled from 'styled-components'
import theme from 'theme'

export const Title = styled.div`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing()};
  font-size: ${theme.spacing(1.7)};
`

export const SliderWrapper = styled.div`
  position: relative;
  padding-bottom: 30%; // to maintain aspect ratio

  .slick-slider {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1200px;
    max-height: 360px;
  }

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-slide {
    width: 100%;
    height: 100%;

    & > div {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;

      // card      
      & > div {
        width: 90%;
        height: 96%;
      }
    }
  }

  // arrows
  .slick-arrow {
    margin-top: -4px;
    z-index: 1;
    background: black;
    height: 98%;
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

  //media queries

  @media (min-width: 1200px) {
    padding-bottom: 30%;
  }

  @media (max-width: 1150px) {
    padding-bottom: 37%;
  }

  @media (max-width: 900px) {
    padding-bottom: 42%;

    // card      
    .slick-slide > div > div {
      width: 80%;
    }
  }

  @media (max-width: 750px) {
    padding-bottom: 45%;

    // card      
    .slick-slide > div > div {
      width: 85%;
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 70%;

    // card      
    .slick-slide > div > div {
      width: 85%;
    }
  }

  @media (max-width: 400px) {
    padding-bottom: 85%;

    // card      
    .slick-slide > div > div {
      width: 87%;
    }
  }
`

export const Wrapper = styled.div`
  position: relative;
`
