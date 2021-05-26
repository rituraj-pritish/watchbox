import api from 'api'

export const getMovieDetails = movieId => {
	return api(`/movie/${movieId}`, {}, { append_to_response: 'credits' })
}

export const getPopularMovies = (page = 1) => {
	return api('/movie/popular', {}, { page })
}