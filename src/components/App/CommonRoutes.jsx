import React from 'react'
import { Route } from 'react-router'

import Home from 'modules/home/Home'
import Movie from 'modules/movies/Movie'
import CastAndCrew from 'components/CastAndCrew'
import Person from 'modules/person/Person'
import TV from 'modules/tv/TV'
import MediaPage from 'components/MediaPage'
import Seasons from 'modules/tv/Seasons'
import Season from 'modules/tv/Season'
import Episodes from 'modules/tv/Episodes'
import Episode from 'modules/tv/Episode'
import Reviews from 'components/Reviews'

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
					'/tv/:tvId/media/:mediaType',
					'/tv/:tvId/seasons/:seasonNumber/media/:mediaType',
					'/tv/:tvId/seasons/:seasonNumber/episodes/:episodeNumber/media/:mediaType',
					'/person/:personId/media/:mediaType',
				]}
				component={MediaPage}
			/>
			<Route
				exact
				path={[
					'/movie/:movieId/reviews',
					'/tv/:tvId/reviews'
				]}
				component={Reviews}
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
			<Route
				exact
				path='/tv/:tvId/seasons/:seasonNumber'
				component={Season}
			/>
			<Route
				exact
				path='/tv/:tvId/seasons/:seasonNumber/episodes'
				component={Episodes}
			/>
			<Route
				exact
				path='/tv/:tvId/seasons/:seasonNumber/episodes/:episodeNumber'
				component={Episode}
			/>
		</>
	)
}

export default CommonRoutes
