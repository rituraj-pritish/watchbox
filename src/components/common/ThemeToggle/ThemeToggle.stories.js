import React from 'react'
import { Wrapper } from '../Navbar/Navbar.styles'
import FlexBox from '../ui/FlexBox'

import ThemeToggle from './index'

export default { title: 'Theme Toggle' }

export const themeToggle = () => (
	<Wrapper>
		<FlexBox alignItems='center'>
			<ThemeToggle/>
		</FlexBox>
	</Wrapper>
)