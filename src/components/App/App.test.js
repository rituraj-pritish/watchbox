import React from 'react'

import { render } from 'tests/utils'
import App from './App'

test('renders learn react link', () => {
	const { container } = render(<App />)
	expect(container).toBeInTheDocument()
})
