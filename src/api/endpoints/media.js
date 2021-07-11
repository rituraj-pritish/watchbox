import api from 'api'

export const getVideos = (mediaType, mediaId) => {
	return api(`/${mediaType}/${mediaId}/videos`)
}

export const getWatchProviders = (mediaType, mediaId) => {
	return api(`/${mediaType}/${mediaId}/watch/providers`)
}

export const rateMedia = (mediaType, mediaId, rating) => {
	return api(
		`/${mediaType}/${mediaId}/rating`,
		{ method: 'POST', body: { value: rating } }
	)
}

export const deleteRating = (mediaType, mediaId) => {
	return api(
		`/${mediaType}/${mediaId}/rating`, 
		{ method: 'DELETE' }
	)
}