import { getMovieWatchlist } from 'api/endpoints/movies'
import { getShowsWatchlist } from 'api/endpoints/tv'
import { useQueries } from 'react-query'

export default () => {
	const [movies, shows] = useQueries([
		{ queryKey: ['watchlist', 'movies'], queryFn: getMovieWatchlist },
		{ queryKey: ['watchlist', 'tvs'], queryFn: getShowsWatchlist }
	])

	const moviesWatchlist = movies.data?.results || []
	const showsWatchlist = shows.data?.results || []

	const allItems = [...moviesWatchlist, ...showsWatchlist]
  
	const checkIfInWatchlist = mediaId => {
		const media = allItems.find(({ id }) => id === mediaId)
		return !!media
	}

	const refetchWatchlist = (mediaType) => {
		if(mediaType === 'movie') {
			movies.refetch()
		} else {
			shows.refetch()
		}
	}

	return {
		checkIfInWatchlist,
		refetchWatchlist
	}
}