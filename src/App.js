import api from 'api'
import GlobalState from 'components/GlobalState'
import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import theme from 'theme'
import GlobalStyle from 'theme/globalStyle'

const App = () => {
	return (
		<SkeletonTheme
			color={theme.colors.skeleton.background} 
			highlightColor={theme.colors.skeleton.highlightColor}
		>
			<GlobalState/>
			<GlobalStyle/>
      muveez
		</SkeletonTheme>
	)
}

export default App
