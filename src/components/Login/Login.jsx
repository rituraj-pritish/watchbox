import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import Button from 'components/common/ui/Button'
import Input from 'components/common/ui/Input'
import FlexBox from 'components/common/ui/FlexBox'
import useAuthentication from 'hooks/useAuthentication'
import { StyledLink } from './Login.styles'

const SIGNUP_URL = 'https://www.themoviedb.org/signup'

const Login = () => {
	const history = useHistory()
	const { login, isAuthenticated, isLoading } = useAuthentication()

	const [username, setUsername] = useState('uniqueJohnDoe21')
	const [password, setPassword] = useState('123456')

	const { refetch: handleClick, isFetching } = useQuery(
		'login',
		() => login({ username, password }),
		{ enabled: false }
	)
	
	if(isAuthenticated && !isLoading) history.replace('/')

	return (
		<FlexBox
			flexDirection='column'
			p={3}
			mx='auto'
			width='100%'
			maxWidth={400}
		>
			<Input
				label='Username'
				value={username}
				onChange={setUsername}
				mb={3}
			/>
			<Input
				label='Password'
				value={password}
				type='password'
				onChange={setPassword}
			/>
			<FlexBox
				mt={3}
				justifyContent='flex-end'
			>
				<Button
					isLoading={isFetching}
					onClick={handleClick}
				>
          Login
				</Button>
			</FlexBox>

			<FlexBox>
				{'Don\'t have an account'}
				<StyledLink
					href={SIGNUP_URL}
					target='_blank'
					rel='noreferrer'
				>Sign up
				</StyledLink>
			</FlexBox>
		</FlexBox>
	)
}

export default Login
