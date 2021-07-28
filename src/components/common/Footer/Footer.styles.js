import styled from 'styled-components'
import theme, { sizes } from 'theme'

import { ReactComponent as TMDBLogo } from './tmdb-logo.svg'

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.layout};
  display: flex;
  justify-content: center;
  height: 200px;
  margin-top: ${theme.spacing()};

  @media (max-width: ${sizes.md}) {
    height: fit-content;
  }
`

export const Content = styled.div`
  padding: 0 ${theme.spacing()};
  max-width: ${theme.maxWidth};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${sizes.md}) {
    flex-direction: column;
    padding: ${theme.spacing()};

    & > div:first-child {
      margin-bottom: ${theme.spacing(2)};
    }
  }
`

export const StyledTMDBLogo = styled(TMDBLogo)`
  width: 100px;
`

