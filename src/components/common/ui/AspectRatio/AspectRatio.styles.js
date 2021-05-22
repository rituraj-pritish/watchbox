import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${({ ratio }) => (1 / ratio) * 100 + '%'};
  position: relative; 
  
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
