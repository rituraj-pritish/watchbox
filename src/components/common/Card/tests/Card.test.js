import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'tests/utils'
import Card from '..'
import { MOVIE } from 'tests/mocks/movies.mock.js'
import { PERSON } from 'tests/mocks/person.mock.js'

describe('Card tests', () => {
	test('Clicking on movie changes to movie route', () => {
		const { history } = render(<Card {...MOVIE}/>)

		userEvent.click(screen.getByTestId(MOVIE.id))
		expect(history.location.pathname).toBe(`/movie/${MOVIE.id}`)
	})

	test('Clicking on person changes to person route', () => {
		const { history } = render(<Card {...PERSON}/>)
    
		userEvent.click(screen.getByTestId(PERSON.id))
		expect(history.location.pathname).toBe(`/person/${PERSON.id}`)
	})

	test('Clicking on play icon does not change route' , async () => {
		const { history } = render(<Card {...MOVIE}/>)
		userEvent.click(screen.getByTestId('play-icon'))

		expect(history.location.pathname).toBe('/')
	})
})