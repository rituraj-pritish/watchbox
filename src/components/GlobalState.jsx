import useFavorites from 'hooks/useFavorites'
import useGenres from 'hooks/useGenres'
import useWatchlist from 'hooks/useWatchlist'


const GlobalState = () => {
	useWatchlist()
	useFavorites()
	useGenres()

	return null
}

export default GlobalState
