import { useEffect } from 'react'
import { useQueries } from 'react-query'

import { getFavoriteMovies } from 'api/endpoints/movies'
import { getFavoriteShows } from 'api/endpoints/tv'
import { addToFavorite, removeFromFavorite } from 'api/endpoints/account'
import useAuthentication from './useAuthentication'

// if notFetched -> for multiple pages
export default (mediaId, mediaType) => {
	const { user } = useAuthentication()
	const accountId = user?.id

	const [movies, shows] = useQueries([
		{ queryKey: ['favorites', 'movies'], queryFn: getFavoriteMovies, enabled: false },
		{ queryKey: ['favorites', 'tvs'], queryFn: getFavoriteShows, enabled: false }
	])

	useEffect(() => {
		if(accountId && !movies.isFetched && !shows.isFetched) {
			movies.refetch()
			shows.refetch()
		}
	}, [accountId])

	const favoriteMovies = movies.data?.results || []
	const favoriteShows = shows.data?.results || []
	const allItems = [...favoriteMovies, ...favoriteShows]

	const refetchFavorites = () => {
		if(mediaType === 'movie') {
			movies.refetch()
		} else {
			shows.refetch()
		}
	}

	const isFavorite = !!allItems.find(({ id }) => id === mediaId)

	const payload = {
		media_type: mediaType,
		media_id: mediaId
	}

	const toggleFavorite = () => {
		if(isFavorite) {
			return removeFromFavorite(accountId, payload)
		} else {
			return addToFavorite(accountId, payload)
		}
	}

	return {
		refetchFavorites,
		isFavorite,
		toggleFavorite
	}
}