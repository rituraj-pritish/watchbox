import api from 'api'
import GlobalState from 'components/GlobalState'
import React from 'react'
import GlobalStyle from 'theme/globalStyle'

const App = () => {
	api('/trending/all/day')
		.then(res => console.log('re', res))
	return (
		<div>
			<GlobalState/>
			<GlobalStyle/>
      muveez
		</div>
	)
}

export default App
