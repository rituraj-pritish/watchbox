import styled from 'styled-components'

export const TriggerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #0000001c;
      opacity: 0;
    }

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    fill: ${({ theme }) => theme.colors.primary};
    opacity: 0;
  }

  &:hover svg {
    opacity: 1;
  }
`
