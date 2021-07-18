import styled from 'styled-components'
import { space } from 'styled-system'
import theme from 'theme'

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
    max-width: ${theme.maxWidth};
    max-height: 360px;
  }

  .slick-list {
    height: 100%;
    overflow: visible;
  }

  .slick-track {
    height: 100%;
    margin-left: 0;
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
    margin-top: -5px;
    z-index: 1;
    background: ${({ theme }) => theme.colors.textTertiary + '33'}; // opacity 33%
    height: 98%;
    width: ${theme.spacing(2)};
    display: flex !important;

    &:hover {
      background: ${({ theme }) => theme.colors.textTertiary + '80'}; // opacity 50%
    }

    svg {
      padding: ${theme.spacing(0.25)};
    }

    &:before {
      content: '';
    }
  }

  .slick-next {
    right: 0;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
  }

  .slick-prev {
    left: 0;
    border-top-left-radius: ${theme.borderRadius};
    border-bottom-left-radius: ${theme.borderRadius};
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

  @media (hover:none) {
    .slick-arrow {
      visibility: hidden;
    }
  }
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${space};
`
