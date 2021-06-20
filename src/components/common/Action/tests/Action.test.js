import React from 'react'
import Action from '../index'
import * as hooks from 'hooks/useAuthentication'
import { render, screen, waitFor } from 'tests/utils'
import userEvent from '@testing-library/user-event'

describe('Action', () => {
	test('renders action with login required', async () => {
		render(
			<Action
				tooltip='Tooltip'
			/>
		)

		userEvent.hover(screen.getByTestId('action'))
		await waitFor(() => screen.findByText('Tooltip'))
		expect(screen.getByText('Login required !')).toBeInTheDocument()
	})

	test('renders action without login required', async () => {
		jest.spyOn(hooks, 'default').mockImplementation(() => ({
			isAuthenticated: true
		}))

		render(
			<Action
				tooltip='Tooltip'
			/>
		)

		userEvent.hover(screen.getByTestId('action'))
		await waitFor(() => screen.findByText('Tooltip'))
		expect(screen.queryByText('Login required !')).not.toBeInTheDocument()
	})
})
