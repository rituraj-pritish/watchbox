import { getPersonDetails } from 'api/endpoints/person'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default () => {
	const { personId } = useParams()

	const { data } = useQuery(
		['person', personId],
		() => getPersonDetails(personId)
	)

	return { ...data, mediaType: 'person' }
}