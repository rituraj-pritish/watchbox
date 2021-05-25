import { getMovieDetails } from 'api/endpoints/movies'
import MediaOverview from 'components/MediaOverview'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const Movie = () => {
	const { movieId } = useParams()
	const { data } = useQuery(
		['movie', movieId], 
		() => getMovieDetails(movieId),
		{
			refetchOnMount: false,
			refetchOnWindowFocus: false
		}
	)

	return (
		<>
			<MediaOverview {...data} />
		</>
	)
}

export default Movie
