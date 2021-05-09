import useTheme from 'hooks/useTheme'
import React from 'react'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link/Link'
import Text from '../ui/Text'

import { Content, Wrapper } from './Navbar.styles'

const Navbar = () => {
	const { toggleTheme } = useTheme()

	return (
		<Wrapper>
			<Content>
				<Text size={4}>
					WatchBox
				</Text>

				<FlexBox alignItems='center'>
					<Text
						onClick={toggleTheme}
						mr={3}
					>Toggle
					</Text>
					<Link
						size={3}
						color='primary'
					>Login
					</Link>	
				</FlexBox>			
			</Content>
		</Wrapper>
	)
}

export default Navbar
