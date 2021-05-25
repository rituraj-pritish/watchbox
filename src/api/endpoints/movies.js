import api from 'api'

export const getPopularMovies = (page = 1) => {
	return api('/movie/popular', {}, { page })
}