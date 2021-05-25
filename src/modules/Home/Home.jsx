import { getPopularMovies } from 'api/endpoints/movies'
import Carousel from 'components/common/Carousel'
import React from 'react'

const Home = () => {
	return (
		<div>
			<Carousel
				title='Popular'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
			/>
			<Carousel
				title='Popular'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
			/>
			<Carousel
				title='Popular'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
			/>
			<Carousel
				title='Popular'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
			/>
			<Carousel
				title='Popular'
				request={{
					request: getPopularMovies,
					key: ['movies', 'popular']
				}}
			/>
		</div>
	)
}

export default Home
