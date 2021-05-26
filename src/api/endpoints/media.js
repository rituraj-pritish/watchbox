import api from 'api'

export const getVideos = (mediaType, mediaId) => {
	return api(`/${mediaType}/${mediaId}/videos`)
}

export const getWatchProviders = (mediaType, mediaId) => {
	return api(`/${mediaType}/${mediaId}/watch/providers`)
}