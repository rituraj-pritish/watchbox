import styled from 'styled-components'
import theme from 'theme'
import { centerElement, overlay } from 'theme/commonStyles'
import Action from '../Action'

export const Overlay = styled.div`
  ${overlay}
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing()};
  cursor: default;
  background: ${({ theme }) => theme.isDarkMode ? '#000000ad' : '#efefefe8'};
  opacity: 0;
  z-index: 1;

  svg {
    width: ${theme.spacing(4)};
    fill: ${({ theme }) => theme.colors.textSecondary};
    margin: 0 auto;
    cursor: pointer;
    transition: fill 0.2s;

    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  margin-left: auto;
  position: absolute;
  top: 0;
  right: ${theme.spacing(0.5)};
  z-index: 1;

  & > .__react_component_tooltip {
    top: -28px !important;
  }
`

export const StyledAction = styled(Action)`
  background: ${({ theme }) => theme.colors.tertiaryLight};
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
`

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 320px;
  padding: ${theme.spacing(0.5)};
  background: ${({ theme }) => theme.colors.paper};
  border-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: ${({ theme }) =>  
		`0 0px 15px 10px ${theme.isDarkMode ?'#2c2c2ce0' : '#d8d8d882'}`};

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${StyledAction} {
    opacity: 1;
    background: transparent;
      &:hover {
        background: transparent;
      }
  }
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-grow: 1;

  & > span:first-child {
    flex-grow: 1;
  }

  & > span:nth-child(2) {
    height: 44px;
    ${centerElement}
  }
`

