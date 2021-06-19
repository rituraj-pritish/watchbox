import styled from 'styled-components'
import { space } from 'styled-system'
import Image from '../ui/Image'

export const StyledImage = styled(Image)`
  &:hover {
    box-shadow: ${({ theme }) =>  
		`0 0px 15px 10px ${theme.isDarkMode ?'#3d3d3de0' : '#71717182'}`};
  }
`

export const Wrapper = styled.div`
  ${space};
`
