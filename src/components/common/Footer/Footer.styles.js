import styled from 'styled-components'
import theme from 'theme'

import { ReactComponent as TMDBLogo } from './tmdb-logo.svg'

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.layout};
  display: flex;
  justify-content: center;
  height: 200px;
  margin-top: ${theme.spacing()};
`

export const Content = styled.div`
  padding: 0 ${theme.spacing()};
  max-width: ${theme.maxWidth};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledTMDBLogo = styled(TMDBLogo)`
  width: 100px;
`

