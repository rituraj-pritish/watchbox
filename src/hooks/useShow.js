import { getTvDetails } from 'api/endpoints/tv'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default () => {
	const { tvId } = useParams()

	const { data } = useQuery(
		['tv', tvId],
		() => getTvDetails(tvId)
	)

	return { ...data, mediaType: 'tv' }
}