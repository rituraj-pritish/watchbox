import api from 'api'

export const getTvDetails = showId => {
	return api(`/tv/${showId}`, {}, { append_to_response: 'credits,images,videos,reviews' })
}

export const getSeasonDetails = (showId, seasonNumber) => {
	return api(
		`/tv/${showId}/season/${seasonNumber}`,
		{},
		{ append_to_response: 'credits,images,videos' }
	)
}

export const getEpisodeDetails = (showId, seasonNumber, episodeNumber) => {
	return api(
		`/tv/${showId}/season/${seasonNumber}/episode/${episodeNumber}`,
		{},
		{ append_to_response: 'credits,images,videos' }
	)
}

export const getPopularTv = (page = 1) => {
	return api('/tv/popular', {}, { page })
}

export const getAiringTodayShows = (page = 1) => {
	return api('/tv/airing_today', {}, { page })
}

export const getTopRatedShows = (page = 1) => {
	return api('/tv/top_rated', {}, { page })
}

export const getOnTheAirShows = (page = 1) => {
	return api('/tv/on_the_air', {}, { page })
}

export const getFavoriteShows = (accountId, page = 1) => {
	return api(`/account/${accountId}/favorite/tv`, {}, { page })
}


export const getShowsWatchlist = (accountId, page = 1) => {
	return api(`/account/${accountId}/watchlist/tv`, {}, { page })
}

export const getRecommendedShows = showId => {
	return api(`/tv/${showId}/recommendations`)
}
