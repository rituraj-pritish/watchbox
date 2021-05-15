import React, { useEffect } from 'react'
import { Route } from 'react-router'

import Providers from './Providers'
import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'
import { AppWrapper } from './App.styles'
import Login from 'components/Login'
import useAuthentication from 'hooks/useAuthentication'

const App = () => {
	const { checkIfAuthenticated, isLoading, isAuthenticated } = useAuthentication()
	useEffect(() => {
		checkIfAuthenticated()	
	}, [])

	const render = () => {
		if(isLoading) return 'app content loading screen'
		if(isAuthenticated) return 'protected routes'
		
		return (
			<Route
				path='/login'
				component={Login}
			/>
		)
	}

	return (
		<Providers>
			<AppWrapper>
				<Navbar/>
				<div>
					{render()}
				</div>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
