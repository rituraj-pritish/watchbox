import { setupWorker, setupServer } from 'msw'
import genre from './genre.mock'
import search from './search.mock'

const handlers = [
	...genre,
	...search
]

export const worker = setupWorker(...handlers)

// const server = setupServer(...handlers)

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

