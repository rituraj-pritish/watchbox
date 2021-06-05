import { addToWatchlist, removeFromWatchlist } from 'api/endpoints/account'
import { getMovieWatchlist } from 'api/endpoints/movies'
import { getShowsWatchlist } from 'api/endpoints/tv'
import { useQueries } from 'react-query'
import useAuthentication from './useAuthentication'

export default (mediaId, mediaType) => {
	const { user } = useAuthentication()
	const accountId = user?.id

	const [movies, shows] = useQueries([
		{ queryKey: ['watchlist', 'movies'], queryFn: getMovieWatchlist },
		{ queryKey: ['watchlist', 'tvs'], queryFn: getShowsWatchlist }
	])

	const moviesWatchlist = movies.data?.results || []
	const showsWatchlist = shows.data?.results || []
	const allItems = [...moviesWatchlist, ...showsWatchlist]

	const isInWatchlist = !!allItems.find(({ id }) => id === mediaId)

	const refetchWatchlist = () => {
		if(mediaType === 'movie') {
			movies.refetch()
		} else {
			shows.refetch()
		}
	}

	const payload = {
		media_type: mediaType,
		media_id: mediaId
	}

	const toggleWatchlist = () => {
		if(isInWatchlist) {
			return removeFromWatchlist(accountId, payload)
		} else {
			return addToWatchlist(accountId, payload)
		}
	}

	return {
		isInWatchlist,
		refetchWatchlist,
		toggleWatchlist
	}
}