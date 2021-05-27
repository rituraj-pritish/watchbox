import api from 'api'

export const getPersonDetails = (personId) => {
	return api(`/person/${personId}`)
}