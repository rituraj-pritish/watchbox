import styled, { css } from 'styled-components'
import theme from 'theme'
import { centerElement } from 'theme/commonStyles'
import Icon from '../ui/Icon'

export const StyledIcon = styled(Icon)`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: ${theme.spacing(0.5)};
  width: fit-content;
  height: fit-content;
  border-radius: ${theme.borderRadius};

  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryLight};
  }

  svg {
    width: ${theme.spacing()};
    height: ${theme.spacing()};
  }
`

export const Number = styled.div`
  width: ${theme.spacing(2)};
  height: ${theme.spacing(2)};
  ${centerElement};
  margin: 0 ${theme.spacing(0.5)};
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: ${({ disabled }) => !disabled ? 'pointer' : 'default'};

  ${({ theme, selected }) => selected && css`
    color: ${theme.colors.textPrimary};
    font-weight: 500;
  `};

  &:hover {
    color: ${({ theme, disabled }) => !disabled && theme.colors.textPrimary};
  }
`