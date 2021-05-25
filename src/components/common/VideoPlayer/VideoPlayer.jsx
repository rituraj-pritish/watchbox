import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'

import { PlayerWrapper, StyledSkeleton } from './VideoPlayer.styles'
import usePageVisibility from 'hooks/usePageVisibility'

const VideoPlayer = ({
	videoKey
}) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const isPageVisible = usePageVisibility()

	return (
		<PlayerWrapper>
			{!isLoaded && <StyledSkeleton/>}
			<ReactPlayer 
				url={`https://www.youtube.com/watch?v=${videoKey}`}
				onReady={() => setIsLoaded(true)}
				width='100%'
				height='100%'
				playing={isPageVisible}
				controls
			/>
		</PlayerWrapper>
	)
}

VideoPlayer.propTypes = {
	videoKey: PropTypes.string,
}

export default VideoPlayer
