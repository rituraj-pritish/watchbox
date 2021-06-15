import userEvent from '@testing-library/user-event'
import { renderApp, screen, waitForElementToBeRemoved } from 'tests/utils'

test('Login', () => {
	const { history } = renderApp({
		route: '/login?redirect_url=/tv/1234'
	})

	userEvent.click(screen.getByRole('button'))
	waitForElementToBeRemoved(() => screen.queryByText('Login',))
	expect(history.push).toHaveBeenCalledWith('/')
})