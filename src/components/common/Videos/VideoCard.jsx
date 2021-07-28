import React from 'react'
import PropTypes from 'prop-types'

import Image from '../ui/Image'
import VideoPlayer from '../VideoPlayer'
import Modal from '../Modal'
import { ReactComponent as PlayIcon } from 'assets/icons/play-icon.svg'
import { TriggerWrapper } from './Videos.styles'

const getVideoThumbnailUrl = key => {
	return `https://img.youtube.com/vi/${key}/0.jpg`
}

const VideoCard = ({ videoKey }) => {
	return (
		<Modal
			key={videoKey}
			trigger={(
				<TriggerWrapper>
					<Image
						directUrl={getVideoThumbnailUrl(videoKey)}
						height={300}
						width={500}
						mr={3}
					/>
					<PlayIcon/>
				</TriggerWrapper>
			)}
			styles={{
				wrapper: {
					height: '50vw',
					width: '80vw'
				},
				content: {
					overflow: 'hidden'
				}
			}}
		>
			<VideoPlayer
				videoKey={videoKey}
			/>
		</Modal>
	)
}

VideoCard.propTypes = {
	videoKey: PropTypes.string.isRequired,
}

export default VideoCard
