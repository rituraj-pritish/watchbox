import api from 'api'

const getNewToken = () => api('/authentication/token/new')

const validateToken = (body) => 
	api('/authentication/token/validate_with_login', {
		method: 'POST',
		body
	})

const getNewSession = (body) => api('/authentication/session/new', {
	method: 'POST',
	body
})

export const login = (data) => new Promise((resolve, reject) => {
	getNewToken() 
		.then(tokenRes => {
			//todo handle token failure
      
			if(tokenRes.success) {
				validateToken({
					...data,
					request_token: tokenRes.request_token
				})
					.then(validateRes => {
						getNewSession({ request_token: validateRes.request_token })
							.then(res => resolve(res))
					})
			}
		})
		.catch(err => reject(err))
})

export const getUser = () => api('/account')