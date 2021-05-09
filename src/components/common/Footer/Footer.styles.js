import styled from 'styled-components'
import theme from 'theme'

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.layout};
  display: flex;
  justify-content: center;
  height: 200px;
`

export const Content = styled.div`
  max-width: ${theme.maxWidth};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

