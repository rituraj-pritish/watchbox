import { useEffect, useState } from 'react'
import { useMutation, useQueries } from 'react-query'

import { addToWatchlist, removeFromWatchlist } from 'api/endpoints/account'
import { getMovieWatchlist } from 'api/endpoints/movies'
import { getShowsWatchlist } from 'api/endpoints/tv'
import useAuthentication from './useAuthentication'
import toast from 'react-hot-toast'

export default (mediaId, mediaType) => {
	const { user } = useAuthentication()
	const [isLoading, setIsLoading] = useState(false)
	const accountId = user?.id

	const [movies, shows] = useQueries([
		{ queryKey: ['watchlist', 'movies'], queryFn: getMovieWatchlist, enabled: false },
		{ queryKey: ['watchlist', 'tvs'], queryFn: getShowsWatchlist, enabled: false }
	])

	useEffect(() => {
		if(accountId && !movies.isFetched && !shows.isFetched) {
			movies.refetch()
			shows.refetch()
		}
	}, [accountId])

	const moviesWatchlist = movies.data?.results || []
	const showsWatchlist = shows.data?.results || []
	const allItems = [...moviesWatchlist, ...showsWatchlist]

	const isInWatchlist = !!allItems.find(({ id }) => id === mediaId)

	const refetchWatchlist = () => {
		if(mediaType === 'movie') {
			return movies.refetch()
		} else {
			return shows.refetch()
		}
	}

	const payload = {
		media_type: mediaType,
		media_id: mediaId
	}	

	const mutationFunction = isInWatchlist ? removeFromWatchlist : addToWatchlist

	const { mutate } = useMutation(
		() => mutationFunction(accountId, payload),
		{
			onSuccess: () => {
				refetchWatchlist()
					.then(() => {
						toast.success(
							isInWatchlist ? 'Removed from watchlist.' : 'Added to watchlist.'
						)
						setIsLoading(false)
					})
			},
			onError: () => {
				toast.error('Something went wrong. Please try again.')
			}
		}
	)

	const toggleWatchlist = () => {
		setIsLoading(true)
		mutate()
	}

	return {
		isInWatchlist,
		toggleWatchlist,
		isLoading,
		watchlist: allItems
	}
}