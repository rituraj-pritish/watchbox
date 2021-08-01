import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import useAuthentication from 'hooks/useAuthentication'

const ProtectedRoute = ({
	component: Component,
	...rest
}) => {
	const { isAuthenticated, isLoading } = useAuthentication()

	return (
		<Route 
			{...rest}
			render={props => (!isLoading && !isAuthenticated) 
				? <Component {...props}/>
				: <Redirect to='/'/>
			}
		/>  
	)
}

export default ProtectedRoute
