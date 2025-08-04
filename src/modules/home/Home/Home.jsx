import React from 'react'

import { getMediaByType } from 'api/endpoints/discover'
import { getPopularMovies } from 'api/endpoints/movies'
import { getPopularTv } from 'api/endpoints/tv'
import Carousel from 'components/common/Carousel'
import useTitle from 'hooks/useTitle'

const Home = () => {
	useTitle('Home')
	
	return (
		<div>
			<Carousel
				title='In Cinemas'
				request={{
					request: () => getMediaByType('movie','now_playing', 1),
					key: ['movies', 'now_playing']
				}}
				viewAllLink='/discover/movie?type=now_playing'
				mt={2}
			/>
			<Carousel
				title='Airing Today'
				request={{
					request: () => getMediaByType('tv','airing_today', 1),
					key: ['tvs', 'airing_today']
				}}
				viewAllLink='/discover/tv?type=now_playing'
				mt={4}
			/>
			<Carousel
				title='Popular Shows'
				request={{
					request: () => getPopularTv(1),
					key: ['tvs', 'popular']
				}}
				viewAllLink='/discover/tv?type=popular'
				mt={4}
			/>
			<Carousel
				title='Popular Movies'
				request={{
					request: () => getPopularMovies(1),
					key: ['movies', 'popular']
				}}
				viewAllLink='/discover/movie?type=popular'
				mt={4}
			/>
		</div>
	)
}

export default Home
