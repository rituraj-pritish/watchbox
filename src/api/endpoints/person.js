import api from 'api'

export const getPersonDetails = (personId) => {
	return api(`/person/${personId}`, {}, { append_to_response: 'images,combined_credits' })
}