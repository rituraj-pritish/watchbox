import React from 'react'

import PageTitle from '.'

export default { title: 'Page Title' }

export const singleAncestor = () => {
	return (
		<PageTitle
			title='Photos'
			ancestors={[
				{ text: 'Game of thrones', link: 'a' }
			]}
		/>
	)
}

export const multipleAncestor = () => {
	return (
		<PageTitle
			title='Photos'
			ancestors={[
				{ text: 'Game of thrones', link: 'a' },
				{ text: 'Season 1', link: 'b' },
			]}
		/>
	)
}