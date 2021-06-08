import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/common/ui/Text'
import Review from 'components/common/Review'
import FlexBox from 'components/common/ui/FlexBox'
import Link from 'components/common/ui/Link'

const ReviewsSection = ({ data, viewAllLink }) => {
	const render = () => {
		if(!data) return new Array(3).fill(0).map((_, idx) => (
			<Review
				key={idx}
			/>
		))

		return data.slice(0, 3).map(item => (
			<Review
				key={item.id}
				{...item}
			/>
		))
	}
	return (
		<div>
			<FlexBox
				mb={3}
				justifyContent='space-between'
			>
				<Text
					color='textPrimary'
					size={4}
				>
					Reviews
				</Text>
				<Link 
					to={viewAllLink}
					size={1}
				>
					View all
				</Link>
			</FlexBox>
			{render()}
		</div>
	)
}

ReviewsSection.propTypes = {
	data: PropTypes.array,
	viewAllLink: PropTypes.string.isRequired
}

export default ReviewsSection
