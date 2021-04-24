const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const getImageUrl = (path, size) => 
	TMDB_IMAGE_BASE_URL + (size ? `/w${size}` : '/original') + path

const api = (
	url
) => fetch(TMDB_BASE_URL + url + `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
	.then(response => response.json())
	.then(data => data)

export default api