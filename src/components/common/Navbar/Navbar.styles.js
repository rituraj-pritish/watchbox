import styled from 'styled-components'
import theme from 'theme'


export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.colors.layout};
  display: flex;
  justify-content: center;
  padding: 0 ${theme.spacing()};
  height: 50px;
`

export const Content = styled.div`
  max-width: ${theme.maxWidth};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

