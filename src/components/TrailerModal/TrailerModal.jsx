import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'

import Modal from 'components/common/Modal'
import Text from 'components/common/ui/Text'
import VideoPlayer from 'components/common/VideoPlayer'
import { getVideos } from 'api/endpoints/media'
import FlexBox from 'components/common/ui/FlexBox'

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
	const hasNoTrailer = data && !trailerVideoKey

	return (
		<Modal
			trigger={trigger}
			onOpen={() => {
				if(!data) refetch()
			}}
			aspectRatio={1.6}
			styles={{
				// wrapper: {
				// 	width: '80%',
				// 	height: '55%'
				// },
				content: {
					overflow: 'hidden'
				}
			}}
			header={(
				<Text
					color='primary'
					mb={3}
					size={4}
				>
					{title}
				</Text>
			)}
		>
			{
				hasNoTrailer
					? (
						<FlexBox 
							height='100%'
							width='100%'
							centerElement
						>
							Trailer not available
						</FlexBox>
					)
					: <VideoPlayer videoKey={trailerVideoKey} />
			}
		</Modal>
	)
}

TrailerModal.propTypes = {
	trigger: PropTypes.node.isRequired,
	mediaType: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default TrailerModal
