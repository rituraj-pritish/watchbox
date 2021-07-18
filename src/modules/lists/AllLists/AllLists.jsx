import React from 'react'

import PageTitle from 'components/common/PageTitle'
import FlexBox from 'components/common/ui/FlexBox'
import ListCard from './ListCard'
import CustomLists from './CustomLists'

const AllLists = () => {
	return (
		<div>
			<PageTitle
				title='Lists'
			/>
			<FlexBox mt={4}>
				<ListCard
					to='/lists/watchlist'
					label='Watchlist'
				/>
				<ListCard
					to='/lists/favorites'
					label='Favorites'
				/>
			</FlexBox>
			<CustomLists/>
		</div>
	)
}

export default AllLists
