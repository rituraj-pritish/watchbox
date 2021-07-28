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
import CommonRoutes from './CommonRoutes'
import ScrollToTop from 'components/ScrollToTop'

const App = () => {
	const { checkIfAuthenticated, isLoading } = useAuthentication()
	
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
		
		return (
			<>
				<CommonRoutes/>
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
						<ScrollToTop>
							{render()}
						</ScrollToTop>
					</Switch>
				</AppContent>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
