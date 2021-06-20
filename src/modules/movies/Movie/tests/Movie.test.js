import userEvent from '@testing-library/user-event'
import { withinSection } from 'tests/getUtils'
import { renderApp, screen, waitFor, waitForElementToBeRemoved } from 'tests/utils'

jest.mock('hooks/usePositionOffset.js', () => () => [jest.fn(), true])

test('Movie page', async () => {
	renderApp({ route: '/movie/460465' })

	// navigate to movie page
	await waitFor(() => screen.findAllByText('Cruella'), { timeout: 5000 })
	userEvent.click(withinSection('Popular Movies', 'slick-next', 'testid'))
	userEvent.click(screen.getAllByTestId('460465')[0])
	expect(screen.queryByText('Popular Moveis')).not.toBeInTheDocument()

	await waitFor(() => screen.findByText('Mortal Kombat'))
	expect(screen.getByText('Mortal Kombat')).toHaveStyle('font-weight: bold')
	expect(screen.getByText('1h 50min')).toBeInTheDocument()
	expect(screen.getByText('Get over here.')).toHaveStyle('font-style: italic')

	expect(screen.getByText('Action')).toBeInTheDocument()
	expect(screen.getByText('Release')).toBeInTheDocument()
	expect(screen.getByText('Status')).toBeInTheDocument()

	expect(screen.getByText('Cast')).toBeInTheDocument()
	expect(screen.getByText('Reviews')).toBeInTheDocument()
	expect(screen.getByText('Photos')).toBeInTheDocument()
	expect(screen.getByText('Videos')).toBeInTheDocument()
	expect(screen.getByText('Crew')).toBeInTheDocument()
	expect(screen.getByText('Recommended')).toBeInTheDocument()

	// navigate to cast page and back to movie page
	userEvent.click(withinSection('Cast', 'View all'))
	await waitFor(() => screen.findByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.getByText(/cast/i)).toBeInTheDocument()
	userEvent.click(screen.getByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.queryByText('Mortal Kombat', { selector: 'a' })).not.toBeInTheDocument()

	// navigate to Reviews page and back to movie page
	userEvent.click(withinSection('Reviews', 'View all'))
	await waitFor(() => screen.findByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.getByText('Reviews')).toHaveStyle('font-weight: bold')
	userEvent.click(screen.getByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.queryByText('Mortal Kombat', { selector: 'a' })).not.toBeInTheDocument()

	// navigate to Photos page and back to movie page
	userEvent.click(withinSection('Photos', 'View all'))
	await waitFor(() => screen.findByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.getByText(/Photos/i)).toHaveStyle('font-weight: bold')
	userEvent.click(screen.getByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.queryByText('Mortal Kombat', { selector: 'a' })).not.toBeInTheDocument()

	// navigate to crew page and back to movie page
	userEvent.click(withinSection('Crew', 'View all'))
	await waitFor(() => screen.findByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.getByText(/crew/i)).toBeInTheDocument()
	userEvent.click(screen.getByText('Mortal Kombat', { selector: 'a' }))
	expect(screen.queryByText('Mortal Kombat', { selector: 'a' })).not.toBeInTheDocument()
}, 10000)