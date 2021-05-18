import { Wrapper } from 'components/common/Navbar/Navbar.styles'
import React from 'react'

import SearchBar from '.'

export default { title: 'Search Bar' }

export const searchBar = () => (
	<Wrapper>
		<SearchBar/>
	</Wrapper>
)