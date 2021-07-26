import styled from 'styled-components'
import { centerElement, overlay } from 'theme/commonStyles'

export const RootWrapper = styled.div`
  position: relative;
  filter: ${({ isLoading }) => isLoading && 'blur(2px)'};
`

export const ContentWrapper = styled.div`
  filter: ${({ isLoading }) => isLoading && 'blur(2px)'};
`

export const LoaderWrapper = styled.div`
  ${overlay};
  ${centerElement};
  z-index: 5;
`