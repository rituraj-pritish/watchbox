import styled from 'styled-components'
import { space } from 'styled-system'
import theme from 'theme'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.paper};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  height: ${({ fullView }) => fullView ? '100%' : 'fit-content'};
  width: 100%;
  padding: ${theme.spacing()};

  ${space}
`
