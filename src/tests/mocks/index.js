import { setupWorker } from 'msw'
import genre from './genre.mock'
import search from './search.mock'

const handlers = [
	...genre,
	...search
]

export const worker = setupWorker(...handlers)