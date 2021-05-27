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
				title='Popular'
				request={{
					request: getPopularTv,
					key: ['movies', 'popular']
				}}
			/>
		</div>
	)
}

export default Home
