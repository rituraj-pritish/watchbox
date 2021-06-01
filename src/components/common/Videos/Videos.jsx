import React from 'react'
import PropTypes from 'prop-types'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Link from '../ui/Link'
import Image from '../ui/Image'
import Modal from '../Modal'
import VideoPlayer from '../VideoPlayer'
import VideoCard from './VideoCard'

const Videos = ({ data, viewAllLink }) => {
	if(!data) return null
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
				<Link
					size={1}
					to={viewAllLink}
				>
					View all
				</Link>
			</FlexBox>

			<FlexBox
				overflowX='auto'
				overflowY='hidden'
				pb={2}
			>
				{data.slice(0, 10).map((item) => {
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

Videos.propTypes = {}

export default Videos
