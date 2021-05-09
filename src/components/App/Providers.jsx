import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeConsumer, ThemeProvider } from 'styled-components'
import { SkeletonTheme } from 'react-loading-skeleton'

import { darkTheme, lightTheme } from 'theme'
import GlobalState from 'components/GlobalState'
import GlobalStyle from 'theme/globalStyle'
import useTheme from 'hooks/useTheme'

const Providers = ({ children }) => {
	const { isDarkMode } = useTheme()

	return (
		<Router>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<ThemeConsumer>
					{(theme) => (
						<SkeletonTheme
							color={theme.colors.skeleton}
							highlightColor={theme.colors.skeletonHighlight}
						>
							<GlobalState />
							<GlobalStyle />
							{children}
						</SkeletonTheme>
					)}
				</ThemeConsumer>
			</ThemeProvider>
		</Router>
	)
}

Providers.propTypes = {
	children: PropTypes.node.isRequired
}

export default Providers
