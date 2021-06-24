import api from 'api'

export const getMovieDetails = movieId => {
	return api(
		`/movie/${movieId}`,
		{},
		{ append_to_response: 'credits,images,videos,reviews' }
	)
}

export const getPopularMovies = (page = 1) => {
	return api('/movie/popular', {}, { page })
}

export const getNowPlayingMovies = (page = 1) => {
	return api('/movie/now_playing', {}, { page })
}

export const getTopRatedMovies = (page = 1) => {
	return api('/movie/top_rated', {}, { page })
}

export const getUpcomingMovies = (page = 1) => {
	return api('/movie/upcoming', {}, { page })
}

export const getFavoriteMovies = (accountId, page = 1) => {
	return api(`/account/${accountId}/favorite/movies`, {}, { page })
}


export const getMovieWatchlist = (accountId, page = 1) => {
	return api(`/account/${accountId}/watchlist/movies`, {}, { page })
}

export const getRecommendedMovies = movieId => {
	return api(`/movie/${movieId}/recommendations`)
}
