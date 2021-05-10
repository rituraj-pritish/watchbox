import React, { useEffect } from 'react'
import { Route } from 'react-router'

import Providers from './Providers'
import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'
import { AppWrapper } from './App.styles'
import Login from 'components/Login'
import useAuthentication from 'hooks/useAuthentication'

const App = () => {
	const { checkIfAuthenticated } = useAuthentication()
	useEffect(() => {
		checkIfAuthenticated()	
	}, [])

	return (
		<Providers>
			<AppWrapper>
				<Navbar/>
				<div>
					<Route
						path='/login'
						component={Login}
					/>
				</div>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
