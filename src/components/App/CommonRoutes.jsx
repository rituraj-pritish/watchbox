import React from 'react'
import { Route } from 'react-router'

import Home from 'modules/home/Home'
import Movie from 'modules/movies/Movie'
import CastAndCrew from 'components/CastAndCrew'
import Person from 'modules/person/Person'
import TV from 'modules/tv/TV'
import MediaPage from 'components/MediaPage'
import Seasons from 'modules/tv/Seasons'

const CommonRoutes = () => {
	return (
		<>
			<Route
				exact
				path='/'
				component={Home}
			/>
			<Route
				exact
				path='/person/:personId'
				component={Person}
			/>
			<Route
				exact
				path='/movie/:movieId'
				component={Movie}
			/>
			<Route
				exact
				path={[
					'/movie/:movieId/credits/:creditType',
					'/tv/:tvId/credits/:creditType'
				]}
				component={CastAndCrew}
			/>
			<Route
				exact
				path={[
					'/movie/:movieId/media/:mediaType',
					'/tv/:tvId/media/:mediaType'
				]}
				component={MediaPage}
			/>
			<Route
				exact
				path='/tv/:tvId'
				component={TV}
			/>
			<Route
				exact
				path='/tv/:tvId/seasons'
				component={Seasons}
			/>
		</>
	)
}

export default CommonRoutes
