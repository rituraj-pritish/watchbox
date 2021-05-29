import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'

import Modal from 'components/common/Modal'
import Text from 'components/common/ui/Text'
import VideoPlayer from 'components/common/VideoPlayer'
import { getVideos } from 'api/endpoints/media'

const TrailerModal = ({ 
	trigger,
	title, 
	mediaType, 
	mediaId 
}) => {
	const { data, refetch } = useQuery(
		[mediaType, mediaId, 'videos'],
		() => getVideos(mediaType, mediaId),
		{ enabled: false }
	)

	const trailerVideoKey = data?.results.find(({ type }) => type === 'Trailer')?.key

	return (
		<Modal
			trigger={trigger}
			onOpen={() => {
				if(!data) refetch()
			}}
			styles={{
				width: '70%',
				height: '60%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Text
				color='primary'
				mb={3}
				size={4}
			>
				{title}
			</Text>
			<VideoPlayer videoKey={trailerVideoKey} />
		</Modal>
	)
}

TrailerModal.propTypes = {
	trigger: PropTypes.node.isRequired,
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default TrailerModal
