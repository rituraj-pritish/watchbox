import React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'tests/utils'
import Card from '..'
import { media, cast } from '../Card.stories'

describe('Card tests', () => {
	test('Clicking on movie changes to movie route', () => {
		const { history } = render(<Card {...media}/>)

		userEvent.click(screen.getByTestId(media.id))
		expect(history.location.pathname).toBe(`/movie/${media.id}`)
	})

	test('Clicking on person changes to person route', () => {
		const { history } = render(<Card {...cast}/>)
    
		userEvent.click(screen.getByTestId(cast.id))
		expect(history.location.pathname).toBe(`/person/${cast.id}`)
	})

	test('Clicking on play icon does not change route' , async () => {
		const { history } = render(<Card {...media}/>)
		userEvent.click(screen.getByTestId('play-icon'))

		expect(history.location.pathname).toBe('/')
	})
})