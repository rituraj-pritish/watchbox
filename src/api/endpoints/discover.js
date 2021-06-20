import api from 'api'

export const discover = (mediaType, options) => {
	return api(`/discover/${mediaType}`, {}, options)
} 