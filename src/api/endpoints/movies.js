import api from 'api'

export const getMovieDetails = movieId => {
	return api(`/movie/${movieId}`, {}, { append_to_response: 'credits,images,videos' })
}

export const getPopularMovies = (page = 1) => {
	return api('/movie/popular', {}, { page })
}

export const getFavoriteMovies = (accountId, page = 1) => {
	return api(`/account/${accountId}/favorite/movies`, {}, { page })
}


export const getMovieWatchlist = (accountId, page = 1) => {
	return api(`/account/${accountId}/watchlist/movies`, {}, { page })
}

