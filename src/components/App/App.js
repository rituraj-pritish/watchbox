import React, { useEffect } from 'react'
import { Route } from 'react-router'

import Providers from './Providers'
import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'
import { AppContent, AppWrapper } from './App.styles'
import Login from 'components/Login'
import useAuthentication from 'hooks/useAuthentication'
import Skeleton from 'components/common/ui/Skeleton'
import FlexBox from 'components/common/ui/FlexBox'

const App = () => {
	const { checkIfAuthenticated, isLoading, isAuthenticated } = useAuthentication()
	useEffect(() => {
		checkIfAuthenticated()	
	}, [])

	const render = () => {
		if(isLoading) return (
			<FlexBox flexDirection='column'>
				<Skeleton
					width='100%'
					height={300}
					mb={3}
				/>
				<Skeleton
					width='100%'
					height={300}
				/>
			</FlexBox>
		)

		if(isAuthenticated) return (
			<>
			</>
		)
		
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
				<AppContent>
					{render()}
				</AppContent>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
