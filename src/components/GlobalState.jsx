import { createState } from '@hookstate/core'
import { useQueries } from 'react-query'

import { getMovieGenres, getTvGenres } from 'api/endpoints/genre'

export const GENRE_LIST = createState({})

const GlobalState = () => {
	const results = useQueries([
		{ queryKey: ['genres', 'movies'], queryFn: getMovieGenres },
		{ queryKey: ['genres', 'tvs'], queryFn: getTvGenres }
	])

	if (results.every(({ isSuccess, isLoading }) => isSuccess && !isLoading)) {
		const genres = [...results[0].data.genres, ...results[1].data.genres]
			.reduce(
				(acc, current) => ({
					...acc,
					[current.id]: current.name
				}),
				{}
			)

		GENRE_LIST.set(genres)
	}

	return null
}

export default GlobalState
