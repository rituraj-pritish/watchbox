import React, { useState } from 'react'

import Button from 'components/common/ui/Button'
import Input from 'components/common/ui/Input'
import FlexBox from 'components/common/ui/FlexBox'
import useAuthentication from 'hooks/useAuthentication'

const Login = () => {
	const { login } = useAuthentication()

	const [username, setUsername] = useState('kumar.shubham.learn')
	const [password, setPassword] = useState('vinny007')

	const handleClick = () => login({ username, password })

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
				<Button onClick={handleClick}>Login</Button>
			</FlexBox>
		</FlexBox>
	)
}

export default Login
