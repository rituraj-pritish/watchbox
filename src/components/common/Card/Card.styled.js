import styled from 'styled-components'
import theme from 'theme'

const CARD_BG = theme.colors.black

export const Wrapper = styled.div`
  /* background: ${CARD_BG}; */
  background: grey;
  overflow: hidden;
  width: fit-content;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.3)};
`

export const StyledImage = styled.img`
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`

export const BottomSection = styled.div`
  background: ${CARD_BG};
  margin-top: ${theme.spacing(-0.21)};
  border-bottom-left-radius: ${theme.borderRadius};
  border-bottom-right-radius: ${theme.borderRadius};
  display: flex;

  & > div { // title
    color: ${theme.colors.white}
  }

  & > div { // year
    color: ${theme.colors.white}
  }
`
