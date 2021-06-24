import { getPopularMovies } from 'api/endpoints/movies'
import { getPopularTv } from 'api/endpoints/tv'
import Carousel from 'components/common/Carousel'
import useTitle from 'hooks/useTitle'
import React from 'react'

const Home = () => {
	useTitle('Home')
	
	return (
		<div>
			<Carousel
				title='Popular Shows'
				request={{
					request: getPopularTv,
					key: ['tvs', 'popular']
				}}
				viewAllLink='/discover/tv?type=popular'
			/>
			<Carousel
				title='Popular Movies'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
				viewAllLink='/discover/movie?type=popular'
				mt={4}
			/>
		</div>
	)
}

export default Home
