import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import genre from './genre.mock'
import search from './search.mock'
import movies from './movies'

const handlers = [
	...genre,
	...search,
	...movies
]

export const worker = process.env.NODE_ENV !== 'test'
	? setupWorker(...handlers)
	: null

// don't run for storybook
if(global.process !== undefined) {
	const server = setupServer(...handlers)
	
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())
}

