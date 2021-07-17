import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Link from '../ui/Link'
import VideoCard from './VideoCard'
import Skeleton from '../ui/Skeleton'

const DATA_CHUNK = 10

const Videos = ({ data, viewAllLink }) => {
	const hasMoreData = data?.length > DATA_CHUNK

	const render = () => {
		if(!data) return new Array(3).fill(0).map((_, idx) => (
			<Skeleton
				key={idx}
				width={500}
				height={300}
				mr={3}
				mb={3}
			/>
		))

		if(data.length === 0) return (
			<FlexBox
				width='100%'
				height={300}
				justifyContent='center'
				alignItems='center'
			>
				No videos available
			</FlexBox>
		)

		return data.slice(0, DATA_CHUNK).map((item) => {
			const { key } = item
			return (
				<VideoCard
					key={key}
					videoKey={key}
				/>
			)
		})
	}
	
	return (
		<div data-testid='Videos-section' >
			<FlexBox
				justifyContent='space-between'
				alignItems='flex-end'
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
				mt={4}
			>
				{render()}
			</FlexBox>
		</div>
	)
}

Videos.propTypes = {
	data: PropTypes.array,
	viewAllLink: PropTypes.string
}

export default React.memo(Videos)
