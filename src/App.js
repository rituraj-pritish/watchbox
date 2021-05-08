import api from 'api'
import GlobalState from 'components/GlobalState'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import GlobalStyle from 'theme/globalStyle'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SkeletonTheme
				color={theme.colors.skeleton.background} 
				highlightColor={theme.colors.skeleton.highlightColor}
			>
				<GlobalState/>
				<GlobalStyle/>
      muveez
			</SkeletonTheme>
		</ThemeProvider>
	)
}

export default App
