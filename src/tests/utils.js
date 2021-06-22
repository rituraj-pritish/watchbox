import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'

import Providers from 'components/App/Providers'
import App from 'components/App'
import './mocks'

export const render = (ui, { route } = { route: '/' }) => {
	const history = createMemoryHistory({
		initialEntries: [route]
	})

	const Wrapper = ({ children }) => {
		return (
			<Providers history={history}>
				{children}
			</Providers>
		)
	}
  
	return {
		...rtlRender(ui, { wrapper: Wrapper }),
		history
	}
}

export const renderApp = () => {
	return {
		...rtlRender(<App/>),
		history
	}
}

// re export everything
export * from '@testing-library/react'