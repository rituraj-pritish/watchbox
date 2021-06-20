import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Router } from 'react-router-dom'
import { ThemeConsumer, ThemeProvider } from 'styled-components'
import { SkeletonTheme } from 'react-loading-skeleton'

import { darkTheme, lightTheme } from 'theme'
import GlobalState from 'components/GlobalState'
import GlobalStyle from 'theme/globalStyle'
import useTheme from 'hooks/useTheme'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false
		}
	}
})

const Providers = ({ children, history }) => {
	const { isDarkMode } = useTheme()

	const RouterComponent = history
		? Router
		: BrowserRouter

	return (
		<QueryClientProvider client={queryClient}>
			<RouterComponent history={history}>
				<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
					<ThemeConsumer>
						{(theme) => (
							<SkeletonTheme
								color={theme.colors.skeleton}
								highlightColor={theme.colors.skeletonHighlight}
							>
								<GlobalState />
								<GlobalStyle isDarkMode={isDarkMode} />
								{children}
							</SkeletonTheme>
						)}
					</ThemeConsumer>
				</ThemeProvider>
			</RouterComponent>
		</QueryClientProvider>
	)
}

Providers.propTypes = {
	children: PropTypes.node.isRequired,
	history: PropTypes.object
}

export default Providers
