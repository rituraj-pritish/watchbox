import React from 'react'

import useAuthentication from 'hooks/useAuthentication'
import ThemeToggle from '../ThemeToggle'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link/Link'
import Skeleton from '../ui/Skeleton'
import Text from '../ui/Text'

import { Content, Wrapper } from './Navbar.styles'
import useTheme from 'hooks/useTheme'

const Navbar = () => {
	const { isAuthenticated, isLoading, logout } = useAuthentication()
	const { isDarkMode } = useTheme()

	const render = () => {
		if(isLoading) return (
			<>
				<Skeleton
					height={20}
					width={70}
					mr={3}
				/>
				<Skeleton
					height={20}
					width={70}
				/>
			</>
		)

		if(isAuthenticated) return (
			<Text
				size={3}
				color='textSecondary'
				onClick={logout}
			>
              Logout
			</Text>
		)

		return (
			<Link
				to='/login'
				size={3}
				color='primary'
			>
        Login
			</Link>
		)
	}

	return (
		<Wrapper isDarkMode={isDarkMode}>
			<Content>
				<Link
					to='/'
					size={4}
					color='textSecondary'
				>
          WatchBox
				</Link>

				<FlexBox alignItems='center'>
					{render()}
					<ThemeToggle/>
				</FlexBox>
			</Content>
		</Wrapper>
	)
}

export default Navbar
