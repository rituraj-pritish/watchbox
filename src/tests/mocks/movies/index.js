import { rest } from 'msw'
import URL from '../url'
import { MOVIE } from './movie.mock'
import popular from './popularMovies.mock'

export default [
	rest.get(URL + '/movie/460465', (req, res, ctx) => {
		return res(ctx.json(MOVIE))
	}),

	rest.get(URL + '/movie/popular', (req, res, ctx) => {
		return res(ctx.json(popular))
	}),
]