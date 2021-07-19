import { SESSION_ID_KEY } from 'hooks/useAuthentication'

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_BASE_URL_v4 = 'https://api.themoviedb.org/4'
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

const DEFAULT_OPTIONS = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type':	'application/json'
	}
}

export const getImageUrl = (path, size) => 
	TMDB_IMAGE_BASE_URL + (size ? `/w${size}` : '/original') + path

const apiKey = process.env.REACT_APP_TMDB_API_KEY

const api = (
	url,
	options = {},
	params = {},
	useV4 = false
) => {
	const sessionId = localStorage.getItem(SESSION_ID_KEY)

	const stringParams = Object.entries(params).reduce((acc, [key, value]) => {
		acc += `&${key}=${value}`
		return acc
	}, '')

	const pathname = (useV4 ? TMDB_BASE_URL_v4 : TMDB_BASE_URL) + url +
		`?api_key=${apiKey}` +
	(sessionId ? `&session_id=${sessionId}` : '') +
	stringParams

	return fetch(pathname , {
		...DEFAULT_OPTIONS,
		...options,
		body: options.body ? JSON.stringify(options.body) : undefined,
	})
		.then(response => {
			return response.json()
				.then(data => {
					if(!response.ok) {
						throw new Error(data.status_message)
					}

					return data
				})
		})
		.catch(error => error)
}

export default api