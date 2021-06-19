import userEvent from '@testing-library/user-event'
import React from 'react'
import { render, screen } from 'tests/utils'
import Carousel from '../index'
import data from './data'

describe('Carousel', () => {
	test('Renders carousel', async () => {
		render(
			<Carousel
				title='Movies'
				data={data}
			/>
		)

		expect(screen.getByText('Movies')).toBeInTheDocument()
		expect(screen.queryByText('View all')).not.toBeInTheDocument()
	})

	test('Renders empty message if no data', () => {
		const { container } = render(
			<Carousel
				title='Movies'
				data={[]}
			/>
		)

		expect(screen.getByText('Movies')).toBeInTheDocument()
		// react-slick renders two copies
		expect(screen.getAllByText('No data available')).toHaveLength(2)
		expect(screen.queryByText('View all')).not.toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	test('Renders carousel with view all link', () => {
		const { history } = render(
			<Carousel
				title='Movies'
				data={data}
				viewAllLink='/link'
			/>
		)

		expect(screen.getByText('Movies')).toBeInTheDocument()
		expect(screen.getByText('View all')).toBeInTheDocument()

		jest.spyOn(history, 'push')
		userEvent.click(screen.getByText('View all'))
		expect(history.push).toHaveBeenCalledWith('/link')
	})
})
