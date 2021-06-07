import { createState, useState } from '@hookstate/core'

import { 
	getUser, 
	login as loginEndpoint, 
	logout as logoutEndpoint 
} from 'api/endpoints/authentication' 
import { useHistory } from 'react-router'

const INITIAL_STATE = {
	isLoading: true,
	isAuthenticated: false,
	user: null
}
const AUTH_STATE = createState(INITIAL_STATE)

export const SESSION_ID_KEY = 'session_id'

export default () => {
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
				history.push('/')
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