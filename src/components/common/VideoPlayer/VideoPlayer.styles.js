import styled from 'styled-components'
import { space } from 'styled-system'
import theme from 'theme'
import Skeleton from '../ui/Skeleton'

export const PlayerWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;

  iframe {
    border-radius: ${theme.borderRadius};
  }

  ${space};
`

export const StyledSkeleton = styled(Skeleton)`
  position: absolute;
  top: -1px;
  left: -1px;
  right: 0;
  bottom: 0;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-color: ${({ theme }) => theme.colors.skeleton};
  background-image: ${({ theme }) => 
		`linear-gradient( 90deg,${theme.colors.skeleton},${theme.colors.skeletonHighlight},${theme.colors.skeleton} )`};
`