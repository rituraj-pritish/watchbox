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
  padding-top: ${({ isLoading }) => isLoading ? theme.spacing() : 0};
  padding-bottom: ${theme.spacing(1.5)};
  position: relative;
  overflow: auto;

  // top section
  & > div:first-child {
    background: ${({ theme }) => theme.colors.paper};
    position: sticky;
    top: 0;
  }

  ${space}
`
