import userEvent from '@testing-library/user-event'
import { renderApp, screen, waitForElementToBeRemoved } from 'tests/utils'

test('Login', () => {
	renderApp()
	userEvent.click(screen.getByText('Login', { selector: 'a' }))
	
	userEvent.click(screen.getByRole('button'))
	waitForElementToBeRemoved(() => screen.queryByText('Login'))
})