import { useEffect } from 'react'
import { createState } from '@hookstate/core'
import { genre } from 'api/endpoints'

export const GENRE_LIST = createState({})

const GlobalState = () => {
	useEffect(() => {
		genre.getAll()
			.then(res => {
				const genres = res.genres
					.reduce((acc, current) => ({
						...acc,
						[current.id]: current.name
					}), {})

				GENRE_LIST.set(genres)
			})
	}, [])

	return null
}

export default GlobalState
