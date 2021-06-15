import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'

import Providers from 'components/App/Providers'
import App from 'components/App'



export const render = (ui, { route } = { route: '/' }) => {
	const history = createMemoryHistory({
		initialEntries: [route]
	})

	const Wrapper = ({ children }) => {
		return (
			<Providers>
				<Router history={history}>
					{children}
				</Router>
			</Providers>
		)
	}
  
	return {
		...rtlRender(ui, { wrapper: Wrapper }),
		history
	}
}

export const renderApp = ({ route } = { route: '/' }) => {
	const history = createMemoryHistory({
		initialEntries: [route]
	})

	return {
		...rtlRender(<App history={history} />),
		history
	}
}

// re export everything
export * from '@testing-library/react'