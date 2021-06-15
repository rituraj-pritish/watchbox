import { getMovieDetails } from 'api/endpoints/movies'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default () => {
	const { movieId } = useParams()

	const { data } = useQuery(
		['movie', movieId],
		() => getMovieDetails(movieId)
	)

	return { ...data, mediaType: 'movie' }
}