import { screen, within } from './utils'

export const withinSection = (title, selector, option) => {
	const container = screen.getByTestId(`${title}-section`)
	if(option === 'testid') return within(container).getByTestId(selector)
	return within(container).getByText(selector)
}