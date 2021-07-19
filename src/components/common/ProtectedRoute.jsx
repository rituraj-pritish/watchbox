import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import useAuthentication from 'hooks/useAuthentication'

const ProtectedRoute = props => {
	const history = useHistory()
	const { isAuthenticated, isLoading } = useAuthentication()

	if(!isLoading && !isAuthenticated) {
		history.push('/')
	}

	return (
		<Route {...props}/>  
	)
}

export default ProtectedRoute
