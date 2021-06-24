import api from 'api'

export const discover = (mediaType, options) => {
	return api(`/discover/${mediaType}`, {}, options)
} 

export const getMediaByType = (mediaType, type, page) => {
	return api(`/${mediaType}/${type}`, {}, { page })
} 