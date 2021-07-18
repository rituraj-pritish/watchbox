import React from 'react'
import { Link } from 'react-router-dom'

import PageTitle from 'components/common/PageTitle'
import Image from 'components/common/ui/Image'
import { ListCard, CardLabel } from './AllLists.styles'
import posters from './posters.jpg'
import Text from 'components/common/ui/Text'
import FlexBox from 'components/common/ui/FlexBox'

// eslint-disable-next-line react/prop-types
const Card = ({ to, label, imageUrl }) => (
	<ListCard>
		<Link to={to}>
			<Image
				url={imageUrl}
				directUrl={posters}
				height='150px'
			/>
			<CardLabel>
				<Text
					size={4}
					bold
				>
					{label}
				</Text>
			</CardLabel>
		</Link>
	</ListCard>
)

const AllLists = () => {
	return (
		<div>
			<PageTitle
				title='Lists'
			/>
			<FlexBox mt={4}>
				<Card
					to='/lists/watchlist'
					label='Watchlist'
				/>
				<Card
					to='/lists/favorites'
					label='Favorites'
				/>
			</FlexBox>
		</div>
	)
}

export default AllLists
