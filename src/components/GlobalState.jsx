import { useEffect } from 'react'
import { createState } from '@hookstate/core'
import { getGenresList } from 'api/endpoints/genre'

export const GENRE_LIST = createState({})

const GlobalState = () => {
	useEffect(() => {
		getGenresList().then((res) => {
			const genres = res.genres.reduce(
				(acc, current) => ({
					...acc,
					[current.id]: current.name
				}),
				{}
			)

			GENRE_LIST.set(genres)
		})
	}, [])

	return null
}

export default GlobalState
