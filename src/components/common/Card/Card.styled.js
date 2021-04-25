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
  cursor: pointer;
  width: 200px;
  height: 350px;
  /* width: calc(1/6 * 100vw);
  height: calc(2/7 * 100vh); */
  display: flex;
  flex-direction: column;

  &:hover ${Overlay} {
    visibility: visible;
    backdrop-filter: blur(1.5px);
  }
`

export const Poster = styled.div`
  width: 100%;
  height: calc(100% - ${theme.spacing(3)});
  background-image: ${({ url }) => `url(${url})`};
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`

export const BottomSection = styled.div`
  background: ${CARD_BG};
  margin-top: ${theme.spacing(-0.21)};
  border-bottom-left-radius: ${theme.borderRadius};
  border-bottom-right-radius: ${theme.borderRadius};
  display: flex;
  align-items: center;
  padding: ${theme.spacing(0.5)};
  flex-grow: 1;

  & > div { // title
    font-weight: 500;
    color: ${theme.colors.white};
  }
`