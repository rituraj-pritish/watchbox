import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { getMovieDetails } from 'api/endpoints/movies'
import Carousel from 'components/common/Carousel/Carousel'
import MediaOverview from 'components/MediaOverview'
import useTitle from 'hooks/useTitle'

const Movie = () => {
	const { movieId } = useParams()
	const { data } = useQuery(
		['movie', movieId],
		() => getMovieDetails(movieId),
	)

	useTitle(`${data?.title} - Movie`)

	return (
		<>
			<MediaOverview {...data} />
			<Carousel
				title='Cast'
				person
				data={data?.credits?.cast}
				viewAllLink={`/movie/${movieId}/cast&crew`}
			/>
		</>
	)
}

export default Movie
