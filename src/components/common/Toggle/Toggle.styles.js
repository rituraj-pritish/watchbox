import styled from 'styled-components'

import theme from 'theme'

export const Wrapper = styled.div`
  border-radius: ${theme.spacing(2)};
  border: ${({ theme }) => `2px solid ${theme.colors.secondary.main}`};
  display: flex;
  overflow: hidden;
  width: fit-content;
  border-right: ${({ hideRightBorder }) => hideRightBorder && 'none'};
  border-left: ${({ hideLeftBorder }) => hideLeftBorder && 'none'};
`

export const Option = styled.div`
  border-radius: ${theme.spacing(2)};
  background: ${({ isSelected, theme }) => isSelected 
		? theme.colors.secondary.main : theme.colors.appBg };
  color: ${({ isSelected, theme }) => isSelected 
		? theme.colors.text.black : theme.colors.text.lightGrey };
  font-weight: ${({ isSelected }) => isSelected && 'bold'};
  padding: ${theme.spacing(0.5)} ${theme.spacing()};
  cursor: pointer;
`