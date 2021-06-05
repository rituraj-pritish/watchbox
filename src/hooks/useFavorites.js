import { useQueries, useQueryClient } from 'react-query'

import { getFavoriteMovies } from 'api/endpoints/movies'
import { getFavoriteShows } from 'api/endpoints/tv'

// if notFetched -> for multiple pages
export default () => {
	const [movies, shows] = useQueries([
		{ queryKey: ['favorites', 'movies'], queryFn: getFavoriteMovies },
		{ queryKey: ['favorites', 'tvs'], queryFn: getFavoriteShows }
	])

	const client = useQueryClient()

	const favoriteMovies = movies.data?.results || []
	const favoriteShows = shows.data?.results || []

	const allItems = [...favoriteMovies, ...favoriteShows]
  
	const checkIfFavorite = mediaId => {
		const media = allItems.find(({ id }) => id === mediaId)
		return !!media
	}

	const refetchFavorites = (mediaType) => {
		if(mediaType === 'movie') {
			movies.refetch()
		} else {
			shows.refetch()
		}
	}

	return {
		checkIfFavorite,
		refetchFavorites
	}
}