import useAuthentication from 'hooks/useAuthentication'
import useTheme from 'hooks/useTheme'
import React from 'react'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link/Link'
import Skeleton from '../ui/Skeleton'
import Text from '../ui/Text'

import { Content, Wrapper } from './Navbar.styles'

const Navbar = () => {
	const { isAuthenticated, isLoading, logout } = useAuthentication()
	const { toggleTheme } = useTheme()

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
				color='secondary'
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
					
					{render()}
				</FlexBox>
			</Content>
		</Wrapper>
	)
}

export default Navbar
