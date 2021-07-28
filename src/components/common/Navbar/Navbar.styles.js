import styled from 'styled-components'
import theme, { sizes } from 'theme'


export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.colors.layout};
  display: flex;
  justify-content: center;
  height: ${theme.navHeight};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: ${({ theme }) => `0 0 15px 0px ${theme.isDarkMode ? '#111111' : '#828282'}`};

  @media (max-width: ${sizes.md}) {
    height: 60px;
  }
`

export const Content = styled.div`
  padding: 0 ${theme.spacing()};
  max-width: ${theme.maxWidth};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

