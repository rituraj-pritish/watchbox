import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'tests/utils'
import Card from '..'
import { MOVIE, PERSON } from './data'

describe('Card tests', () => {
	test.only('Movie card', async () => {
		const { history } = render(<Card {...MOVIE}/>)

		expect(screen.getByText('Zack Snyder\'s Justice League')).toBeInTheDocument()

		userEvent.hover(screen.getByTestId(MOVIE.id))
		await waitFor(() => screen.findByText('Action'))
		expect(screen.getByText('Adventure')).toBeInTheDocument()
		expect(screen.getByText('Fantasy')).toBeInTheDocument()
		userEvent.unhover(screen.getByTestId(MOVIE.id))

		// Clicking on play icon does not change route
		userEvent.click(screen.getByTestId('play-icon'))
		expect(history.location.pathname).toBe('/')

		// Clicking on movie changes to movie route
		userEvent.click(screen.getByTestId(MOVIE.id))
		expect(history.location.pathname).toBe(`/movie/${MOVIE.id}`)
	})

	test('Clicking on person changes to person route', () => {
		const { history } = render(<Card {...PERSON}/>)
    
		userEvent.click(screen.getByTestId(PERSON.id))
		expect(history.location.pathname).toBe(`/person/${PERSON.id}`)
	})
})