import styled from 'styled-components'
import theme from 'theme'

export const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.paper};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.5)};
  height: 300px;
`

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  max-width: 200px;
  border-radius: ${theme.borderRadius};
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
`

export const RightSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: ${theme.spacing()};
`
