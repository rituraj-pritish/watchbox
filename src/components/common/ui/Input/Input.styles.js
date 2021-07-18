import styled from 'styled-components'
import theme from 'theme'

export const StyledInput = styled.input`
  background: transparent;
  border: ${({ theme }) => `1px solid ${theme.isDarkMode ? '#6C6C6C' : '#B2B2B2'}`};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.6)};
  font-size: ${theme.spacing()};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:active, &:focus-visible {
    border: ${({ theme }) => `1px solid ${theme.colors.selection}`};
    outline: none;
  }
`
