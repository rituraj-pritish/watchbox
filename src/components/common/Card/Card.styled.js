import styled from 'styled-components'
import theme from 'theme'
import { centerElement, overlay } from 'theme/commonStyles'

const CARD_BG = theme.colors.black

export const Overlay = styled.div`
  ${overlay};
  ${centerElement};
  flex-direction: column;
  backdrop-filter: blur(0);
  background: #00000069;
  border-radius: ${theme.borderRadius};
  visibility: hidden;
  transition: backdrop-filter 0.4s;
  color: white;

  & > svg {
    margin: ${theme.spacing()} 0;
    width: 25%;
  }
`

export const Wrapper = styled.div`
  background: ${CARD_BG};
  position: relative;
  overflow: hidden;
  width: fit-content;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.3)};
  padding-bottom: 0;
  cursor: pointer;
  max-width: 200px;
  max-height: 350px;
  display: flex;
  flex-direction: column;

  &:hover ${Overlay} {
    visibility: visible;
    backdrop-filter: blur(1.5px);
  }
`

export const Poster = styled.div`
  width: 100%;
  height: calc(100% - ${theme.spacing(3.2)});
  background-image: ${({ url }) => `url(${url})`};
  border-radius: ${theme.borderRadius};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const BottomSection = styled.div`
  background: ${CARD_BG};
  border-radius: ${theme.borderRadius};
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0.5)};
  flex-grow: 1;

  & > div { // title
    font-weight: 500;
    color: ${theme.colors.white};
  }
`

export const SkeletonWrapper = styled.div`
  height: 100%; 
  display: flex;
  flex-direction: column;
  margin-top: -1px;

  // poster skeleton
  & > span:first-child {
    height: calc(100% - ${theme.spacing(3.2)});
  }

  // title skeleton
  & > div:last-child {
    width: auto;

    // skeleton wrapper
    & > span {
      width: 100%;
    }
  }
`