import { useEffect, useState } from 'react'
import { useMutation, useQueries } from 'react-query'

import { getFavoriteMovies } from 'api/endpoints/movies'
import { getFavoriteShows } from 'api/endpoints/tv'
import { addToFavorite, removeFromFavorite } from 'api/endpoints/account'
import useAuthentication from './useAuthentication'
import toast from 'react-hot-toast'

export default (mediaId, mediaType) => {
	const { user } = useAuthentication()
	const [isLoading, setIsLoading] = useState(false)
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
			return movies.refetch()
		} else {
			return shows.refetch()
		}
	}

	const isFavorite = !!allItems.find(({ id }) => id === mediaId)

	const payload = {
		media_type: mediaType,
		media_id: mediaId
	}

	const mutateFunction = isFavorite ? removeFromFavorite : addToFavorite

	const { mutate } = useMutation(
		() => mutateFunction(accountId, payload),
		{
			onSuccess: () => {
				refetchFavorites()
					.then(() => {
						toast.success(
							isFavorite ? 'Removed from favorites.' : 'Added to favorites.'
						)
						setIsLoading(false)
					})
			},
			onError: () => {
				toast.error('Something went wrong. Please try again.')
			}
		}
	)

	const toggleFavorite = () => {
		setIsLoading(true)	
		mutate()
	}

	return {
		isFavorite,
		toggleFavorite,
		isLoading,
		favorites: allItems
	}
}