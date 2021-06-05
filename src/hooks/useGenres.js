import { useQueries } from 'react-query'

import { getMovieGenres, getTvGenres } from 'api/endpoints/genre'

export default () => {
	const [movies, shows] = useQueries([
		{ queryKey: ['genres', 'movies'], queryFn: getMovieGenres },
		{ queryKey: ['genres', 'tvs'], queryFn: getTvGenres }
	])

	const movieGenres = movies.data?.genres || []
	const showGenres = shows.data?.genres || []

	const allGenres = [...movieGenres, ...showGenres]
		.reduce(
			(acc, current) => ({
				...acc,
				[current.id]: current.name
			}),{})
  
	return {
		genres: allGenres
	}
}