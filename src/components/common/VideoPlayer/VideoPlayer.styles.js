import styled from 'styled-components'
import theme from 'theme'
import Skeleton from '../ui/Skeleton'

export const PlayerWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  iframe {
    border-radius: ${theme.borderRadius};
  }
`

export const StyledSkeleton = styled(Skeleton)`
  position: absolute;
  top: -1px;
  left: -1px;
  right: 0;
  bottom: 0;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
`