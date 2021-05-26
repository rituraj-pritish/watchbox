import { createState } from '@hookstate/core'
import { getGenresList } from 'api/endpoints/genre'
import { useQuery } from 'react-query'

export const GENRE_LIST = createState({})

const GlobalState = () => {
	useQuery('genres', getGenresList, {
		onSuccess: data => {
			const genres = data.genres.reduce(
				(acc, current) => ({
					...acc,
					[current.id]: current.name
				}),
				{}
			)

			GENRE_LIST.set(genres)
		}
	})

	return null
}

export default GlobalState
