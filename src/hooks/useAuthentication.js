import { createState, useState } from '@hookstate/core'
import { queryClient } from 'components/App/Providers'
import { useHistory } from 'react-router'

import { 
	getUser, 
	login as loginEndpoint, 
	logout as logoutEndpoint 
} from 'api/endpoints/authentication' 
import useUrlParams from './useUrlParams'

const INITIAL_STATE = {
	isLoading: true,
	isAuthenticated: false,
	user: null
}
const AUTH_STATE = createState(INITIAL_STATE)

export const SESSION_ID_KEY = 'session_id'

const QUERIES_TO_RESET = [
	['favorites', 'movies'],
	['favorites', 'tvs'],
	['watchlist', 'movies'],
	['watchlist', 'tvs']
]

export default () => {
	const { redirect_url } = useUrlParams(['redirect_url'])
	const history = useHistory()
	const authState = useState(AUTH_STATE)

	const login = async data => {
		try {
			const res = await loginEndpoint(data)
			if(res.success) {
				localStorage.setItem(SESSION_ID_KEY, res.session_id)
				const user = await getUser()

				authState.set({
					isLoading: false,
					isAuthenticated: true,
					user
				})
				history.push(redirect_url || '/')
			}
		} catch (err) {
			// todo show message
			authState.set({ ...INITIAL_STATE, isLoading: false })
		}
	}

	const checkIfAuthenticated = async () => {
		try {
			const sessionId = localStorage.getItem(SESSION_ID_KEY)
			if(!sessionId) throw new Error('no session id')

			const res = await getUser()
			authState.set({
				isLoading: false,
				isAuthenticated: true,
				user: res,
			})
		} catch (err) {
			authState.set({ ...INITIAL_STATE, isLoading: false })
		}
	}

	const logout = async () => {
		try {
			await logoutEndpoint()
			authState.set({
				...INITIAL_STATE, isLoading: false
			})
			localStorage.removeItem(SESSION_ID_KEY)

			QUERIES_TO_RESET.forEach(key => {
				queryClient.resetQueries(key)
			})

			//todo handle error
		// eslint-disable-next-line no-empty
		} catch (err) {}
	}

	return {
		login,
		checkIfAuthenticated,
		...authState.get(),
		logout
	}
}