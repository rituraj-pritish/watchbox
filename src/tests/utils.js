import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Providers from 'components/App/Providers'
import { MemoryRouter, Router } from 'react-router'
import { createMemoryHistory } from 'history'

window.matchMedia = window.matchMedia || function() {
	return {
		matches : false,
		addListener : function() {},
		removeListener: function() {}
	}
}

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

// re export everything
export * from '@testing-library/react'