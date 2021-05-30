import api from 'api'

export const getTvDetails = movieId => {
	return api(`/tv/${movieId}`, {}, { append_to_response: 'credits,images,videos' })
}

export const getPopularTv = (page = 1) => {
	return api('/tv/popular', {}, { page })
}