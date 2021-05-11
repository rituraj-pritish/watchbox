import { createState, useState } from '@hookstate/core'
import { darkTheme, lightTheme } from 'theme'

const THEME_KEY = 'theme'

const LIGHT = 'light'
const DARK = 'dark'

const initialTheme = localStorage.getItem(THEME_KEY) || DARK
const THEME_STATE = createState(initialTheme)

export default () => {
	const theme = useState(THEME_STATE)
	const isDarkMode = theme.get() === DARK
	
	const toggleTheme = () => {
		const newTheme = isDarkMode ? LIGHT : DARK
		localStorage.setItem(THEME_KEY, newTheme)
		theme.set(newTheme)
	}

	const currentTheme = isDarkMode ? darkTheme : lightTheme

	return { isDarkMode , toggleTheme, theme: currentTheme }
}