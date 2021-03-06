import React from 'react'
import { useHistory } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

import useAuthentication from 'hooks/useAuthentication'
import ThemeToggle from '../ThemeToggle'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link/Link'
import Skeleton from '../ui/Skeleton'
import { Content, Wrapper } from './Navbar.styles'
import UserBadge from './UserBadge'
import SearchBar from 'components/SearchBar'
import Logo from '../Logo'

const Navbar = () => {
	const history = useHistory()
	const { isAuthenticated, isLoading } = useAuthentication()

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
			<UserBadge/>
		)

		return (
			<Link
				to={() => {
					const { pathname, search } = history.location
					const redirectUrl = pathname + (search ? `?${search}` : '')
					return '/login' + `?redirect_url=${redirectUrl}`
				}}
				size={3}
				color='primary'
				bold
			>
        Login
			</Link>
		)
	}

	return (
		<Wrapper>
			<Content>
				<RouterLink
					to='/'
				>
					<Logo/>
				</RouterLink>
				<SearchBar/>
				<FlexBox alignItems='center'>
					<ThemeToggle/>
					{render()}
				</FlexBox>
			</Content>
		</Wrapper>
	)
}

export default Navbar
