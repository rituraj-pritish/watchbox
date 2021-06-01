import React from 'react'
import PropTypes from 'prop-types'

import Image from '../ui/Image'
import VideoPlayer from '../VideoPlayer'
import Modal from '../Modal'

const getVideoThumbnailUrl = key => {
	return `https://img.youtube.com/vi/${key}/0.jpg`
}

const VideoCard = ({ videoKey, ...rest }) => {
	return (
		<Modal
			key={videoKey}
			trigger={(
				<Image
					directUrl={getVideoThumbnailUrl(videoKey)}
					height={300}
					width={500}
					mr={3}
					{...rest}
				/>
			)}
			styles={{
				height: '50vw',
				width: '80vw'
			}}
		>
			<VideoPlayer
				videoKey={videoKey}
			/>
		</Modal>
	)
}

VideoCard.propTypes = {
	videoKey: PropTypes.string.isRequired
}

export default VideoCard
