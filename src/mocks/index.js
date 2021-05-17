import { setupWorker } from 'msw'
import genre from './genre'

const handlers = [
	...genre
]

export const worker = setupWorker(...handlers)