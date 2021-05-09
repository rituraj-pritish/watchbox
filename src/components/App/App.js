import React from 'react'

import Providers from './Providers'
import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'
import { AppWrapper } from './App.styles'

const App = () => {
	return (
		<Providers>
			<AppWrapper>
				<Navbar/>
				<div/>
				<Footer/>
			</AppWrapper>
		</Providers>
	)
}

export default App
