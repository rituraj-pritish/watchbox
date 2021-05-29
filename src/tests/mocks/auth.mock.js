import { rest } from 'msw'
import URL from './url'

export default [
	rest.get(URL + '/authentication/token/new', (req, res, ctx) => {
		return res(ctx.json({
			expires_at: '2021-05-29 13:43:00 UTC',
			request_token: '7b7d29cbc8a1477d13571f22db5199b8d543ac5b',
			success: true
		}))
	}),

	rest.get(URL + '/authentication/session/new', (req, res, ctx) => {
		return res(ctx.json({
			session_id: 'a6cce2fde63347598475a3182777fa3b0933666b',
			success: true
		}))
	}),

	rest.post(URL + '/authentication/token/validate_with_login', (req, res, ctx) => {
		return res(ctx.json({
			'success': true,
			'expires_at': '2021-05-29 13:43:00 UTC',
			'request_token': '7b7d29cbc8a1477d13571f22db5199b8d543ac5b'
		}))
	}),

	rest.get(URL + '/account', (req, res, ctx) => {
		return res(ctx.json({
			'avatar': {
				'gravatar': {
					'hash': 'f72e321825273e30b1bbf1058e50d874'
				},
				'tmdb': {
					'avatar_path': '/7L7xvLnK44vZFrNX2dmfWa9lXqo.jpg'
				}
			},
			'id': 10489792,
			'iso_639_1': 'en',
			'iso_3166_1': 'US',
			'name': '',
			'include_adult': false,
			'username': 'uniqueJohnDoe21'
		}))
	})
]