import { createState, useState } from '@hookstate/core'

import { getUser, login as loginEndpoint } from 'api/endpoints/authentication' 

const INITIAL_STATE = {
	isLoading: true,
	isAuthenticated: false,
	user: null
}
const AUTH_STATE = createState(INITIAL_STATE)

export const SESSION_ID_KEY = 'session_id'

export default () => {
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

	return {
		login,
		checkIfAuthenticated,
		...authState.get()
	}
}