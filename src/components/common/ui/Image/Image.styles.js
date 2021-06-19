import styled from 'styled-components'
import { flexbox, layout, space } from 'styled-system'
import theme from 'theme'
import Skeleton from '../Skeleton'

export const StyledSkeleton = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-radius: ${({ circle }) => circle && '50%'};
  background-color: ${({ theme }) => theme.colors.skeleton};
  background-image: ${({ theme }) => 
		`linear-gradient( 90deg,${theme.colors.skeleton},${theme.colors.skeletonHighlight},${theme.colors.skeleton} )`};
`

export const Wrapper = styled.div`
  position: relative;
  height: ${({ height }) => isNaN(height) ? height : (height + 'px')};
  width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  border-radius: ${({ circle }) => circle ? '50%' : theme.borderRadius};
  z-index: 0;

  ${flexbox}
  ${layout}
  ${space}
`

export const Background = styled.div`
  background-image: ${({ url, fallback }) => `url(${url || fallback})`};
  height: ${({ height }) => isNaN(height) ? height : (height + 'px')};
  width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  min-width: ${({ width }) => isNaN(width) ? width : (width + 'px') };
  border-radius: ${({ circle }) => circle ? '50%' : theme.borderRadius};
  background-position: center;
  background-size: cover;
`
