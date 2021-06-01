import React from 'react'
import PropTypes from 'prop-types'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Link from '../ui/Link'
import Image from '../ui/Image'
import Modal from '../Modal'
import VideoPlayer from '../VideoPlayer'

const Videos = ({ data, viewAllLink }) => {
	console.log('dat', data)
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
				<Link to={viewAllLink}>View all</Link>
			</FlexBox>

			<FlexBox
				overflowX='auto'
				overflowY='hidden'
				pb={2}
			>
				{data.slice(0, 10).map((item) => {
					const { key } = item

					return (
						<Modal
							key={key}
							trigger={
								<div style={{ pointerEvents: 'none' }}>
									<VideoPlayer
										videoKey={key}
										autoPlay={false}
										height={300}
										width={500}
										mr={3}
									/>
								</div>
							}
							styles={{
								height: '50vw',
								width: '80vw'
							}}
						>
							<VideoPlayer
								videoKey={key}
							/>
						</Modal>
					)
				})}
			</FlexBox>
		</div>
	)
}

Videos.propTypes = {}

export default Videos
