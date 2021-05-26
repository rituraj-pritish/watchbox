import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'

import Providers from './Providers'
import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'
import { AppContent, AppWrapper } from './App.styles'
import Login from 'components/Login'
import useAuthentication from 'hooks/useAuthentication'
import Skeleton from 'components/common/ui/Skeleton'
import FlexBox from 'components/common/ui/FlexBox'
import Home from 'modules/home/Home'
import Movie from 'modules/movies/Movie'
import CastAndCrew from 'components/CastAndCrew'

const App = () => {
	const { checkIfAuthenticated, isLoading, isAuthenticated } = useAuthentication()
	useEffect(() => {
		checkIfAuthenticated()	
	}, [])

	const commonRoutes = (
		<>
			<Route
				exact
				path='/'
				component={Home}
			/>
			<Route
				exact
				path='/movie/:movieId'
				component={Movie}
			/>
			<Route
				exact
				path='/movie/:movieId/cast&crew'
				component={CastAndCrew}
			/>
		</>
	)

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
				{commonRoutes}
			</>
		)
		
		return (
			<>
				{commonRoutes}
				<Route
					path='/login'
					component={Login}
				/>
			</>
		)
	}

	return (
		<Providers>
			<AppWrapper>
				<Navbar/>
				<AppContent>
					<Switch>
						{render()}
					</Switch>
				</AppContent>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
