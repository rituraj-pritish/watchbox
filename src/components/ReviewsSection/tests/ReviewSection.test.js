import userEvent from '@testing-library/user-event'
import React from 'react'
import { render, screen } from 'tests/utils'
import ReviewSection from '../index'

describe('Reviews section', () => {
	test('Render empty message if no data', () => {
		const { container } = render(<ReviewSection data={[]} />)
		expect(screen.getByText('Reviews')).toBeInTheDocument()
		expect(screen.getByText('No reviews available')).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	test('Does not Render view all link', () => {
		const { container } = render(<ReviewSection data={{}, {}} />)
		expect(screen.queryByText('View all')).not.toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	test('Render view all link if totals reviews greater than 3', () => {
		const { container, history } = render(
			<ReviewSection
				data={[{}, {}, {}, {}]}
				viewAllLink='/link'
			/>
		)
		expect(screen.getByText('View all')).toBeInTheDocument()

		jest.spyOn(history, 'push')
		userEvent.click(screen.getByText('View all'))
		expect(history.push).toHaveBeenCalledWith('/link')

		expect(container).toMatchSnapshot()
	})
})
