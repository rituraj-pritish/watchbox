import styled from 'styled-components'
import theme from 'theme'
import { centerElement } from 'theme/commonStyles'

export const ListCard = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
  
  &:first-child {
    margin-right: ${theme.spacing()};
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
