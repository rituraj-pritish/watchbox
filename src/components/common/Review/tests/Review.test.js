import React from 'react'
import * as hooks from 'hooks/useOverflow'

import { render, screen } from 'tests/utils'
import Review from '../index'
import userEvent from '@testing-library/user-event'

const REVIEW = {
	'author': 'TheDarkKnight31',
	'author_details': {
		'name': '',
		'username': 'TheDarkKnight31',
		'avatar_path': null,
		'rating': 10
	},
	'content': 'I will be short. You should understand how hard to make movies based on such a legendary universe (expectation is too high!), with a lot of characters that need screen time, and with limited budget, PLUS in a pandemic situation, - the director made a great job.\r\n\r\nThis is the best adaptation of such a legendary title.',
	'created_at': '2021-04-12T05:39:44.021Z',
	'id': '6073dd204d0e8d0043061b63',
	'updated_at': '2021-04-27T22:52:50.651Z',
	'url': 'https://www.themoviedb.org/review/6073dd204d0e8d0043061b63'
}

describe('Review', () => {
	test('renders review component without full review', async () => {
		jest.spyOn(hooks, 'default').mockImplementation(() => [jest.fn(), false])

		const { container } = render(<Review {...REVIEW}/>)
		expect(screen.getByText('TheDarkKnight31')).toBeInTheDocument()
		expect(screen.getByText('12 Apr 2021 11:09 AM')).toBeInTheDocument()
		expect(screen.queryByText('View full review')).not.toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	test('renders review component with full review', async () => {
		jest.spyOn(hooks, 'default').mockImplementation(() => [jest.fn(), true])

		const { container } = render(<Review {...REVIEW}/>)
		expect(screen.getByText('TheDarkKnight31')).toBeInTheDocument()
		expect(screen.getByText('12 Apr 2021 11:09 AM')).toBeInTheDocument()
		expect(screen.getByText('View full review')).toBeInTheDocument()

		userEvent.click(screen.getByText('View full review'))

		expect(screen.getAllByText('TheDarkKnight31')).toHaveLength(2)
		expect(screen.getAllByText('12 Apr 2021 11:09 AM')).toHaveLength(2)
		expect(screen.getAllByText('View full review')).toHaveLength(1)

		expect(container).toMatchSnapshot()
	})
})