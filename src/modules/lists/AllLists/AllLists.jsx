import PageTitle from 'components/common/PageTitle'
import React from 'react'
import { Link } from 'react-router-dom'

const AllLists = () => {
	return (
		<div>
			<PageTitle
				title='Lists'
			/>
			<Link to='/lists/watchlist'>
				Watchlist
			</Link>
			<Link to='/lists/favorites'>
				Favorites
			</Link>
		</div>
	)
}

export default AllLists
