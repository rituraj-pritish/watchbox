import styled from 'styled-components'
import theme from 'theme'
import { centerElement } from 'theme/commonStyles'

export const ListCard = styled.div`
  position: relative;
  flex-grow: 1;
  min-width: 45%;
  max-width: ${theme.spacing(36)};
  overflow: hidden;
  margin-bottom: ${theme.spacing()};
  
  // first card
  &:nth-child(odd) {
    margin-right: ${theme.spacing()};
  }

  // toggle menu
  & > div:last-child {
    position: absolute;
    top: ${theme.spacing(0.5)};
    right: ${theme.spacing(0.5)};
    visibility: hidden;
  }

  &:hover > div:last-child {
    visibility: visible;
  }
`

export const CardLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  ${centerElement}
  background: ${({ theme }) => theme.isDarkMode ? '#0000007a' : '#d6d6d6c7'};
`

export const ListWrapper = styled.div`
  
`