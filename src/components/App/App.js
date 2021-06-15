import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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

const App = ({ history }) => {
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
				<CommonRoutes/>
			</>
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
		<Providers history={history}>
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

App.propTypes = {
	history: PropTypes.object
}

export default App
