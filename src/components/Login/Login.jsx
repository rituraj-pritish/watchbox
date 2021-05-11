import React, { useState } from 'react'

import Button from 'components/common/ui/Button'
import Input from 'components/common/ui/Input'
import FlexBox from 'components/common/ui/FlexBox'
import useAuthentication from 'hooks/useAuthentication'
import useAsync from 'hooks/useAsync'

const Login = () => {
	const { login } = useAuthentication()
	const { callFunction, requesting } = useAsync(login)
	const [username, setUsername] = useState('uniqueJohnDoe21')
	const [password, setPassword] = useState('123456')

	const handleClick = () => callFunction({ username, password })

	return (
		<FlexBox
			flexDirection='column'
			p={3}
			mx='auto'
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
					loading={requesting}
					onClick={handleClick}
				>
					Login
				</Button>
			</FlexBox>
		</FlexBox>
	)
}

export default Login
