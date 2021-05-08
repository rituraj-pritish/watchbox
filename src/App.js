import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalState from 'components/GlobalState'
import api from 'api'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import GlobalStyle from 'theme/globalStyle'

const App = () => {
	return (
		<Router>
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
		</Router>
	)
}

export default App
