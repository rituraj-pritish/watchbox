import styled from 'styled-components'

import Image from 'components/common/ui/Image'

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
`

export const Background = styled(Image)`
  top: 0;
  left: 0;
  z-index: 0;
  position: absolute;
  filter: blur(10px);

  &:before {
    content: '' ;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.appBg};
    opacity: .8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const Overview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`