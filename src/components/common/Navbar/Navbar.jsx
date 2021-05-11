import useAuthentication from 'hooks/useAuthentication'
import useTheme from 'hooks/useTheme'
import React from 'react'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link/Link'
import Text from '../ui/Text'

import { Content, Wrapper } from './Navbar.styles'

const Navbar = () => {
	const { isAuthenticated, logout } = useAuthentication()
	const { toggleTheme } = useTheme()

	return (
		<Wrapper>
			<Content>
				<Link
					to='/'
					size={4}
					color='secondary'
				>
          WatchBox
				</Link>

				<FlexBox alignItems='center'>
					<Text
						onClick={toggleTheme}
						mr={3}
					>
            Toggle
					</Text>
					{!isAuthenticated && (
						<Link
							to='/login'
							size={3}
							color='primary'
						>
              Login
						</Link>
					)}
					{isAuthenticated && (
						<Text
							size={3}
							color='secondary'
							onClick={logout}
						>
              Logout
						</Text>
					)}
				</FlexBox>
			</Content>
		</Wrapper>
	)
}

export default Navbar
