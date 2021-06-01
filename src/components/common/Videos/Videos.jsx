import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Link from '../ui/Link'
import VideoCard from './VideoCard'

const DATA_CHUNK = 10

const Videos = ({ data = [], viewAllLink }) => {
	const hasMoreData = data.length > DATA_CHUNK
	return (
		<div>
			<FlexBox
				justifyContent='space-between'
				alignItems='flex-end'
				mb={4}
			>
				<Text
					bold
					size={4}
					color='textPrimary'
				>
          Videos
				</Text>
				{hasMoreData && (
					<Link
						size={1}
						to={viewAllLink}
					>
						View all
					</Link>
				)}
			</FlexBox>

			<FlexBox
				overflowX='auto'
				overflowY='hidden'
				pb={2}
			>
				{data.slice(0, DATA_CHUNK).map((item) => {
					const { key } = item
					return (
						<VideoCard
							key={key}
							videoKey={key}
						/>
					)
				})}
			</FlexBox>
		</div>
	)
}

Videos.propTypes = {
	data: PropTypes.array,
	viewAllLink: PropTypes.string
}

export default Videos
