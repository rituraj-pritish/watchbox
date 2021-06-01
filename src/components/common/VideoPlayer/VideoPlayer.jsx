import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'

import { PlayerWrapper, StyledSkeleton } from './VideoPlayer.styles'
import usePageVisibility from 'hooks/usePageVisibility'

const VideoPlayer = ({
	videoKey,
	autoPlay = true,
	width,
	height,
	...rest
}) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const isPageVisible = usePageVisibility()

	return (
		<PlayerWrapper {...rest}>
			{!isLoaded && <StyledSkeleton/>}
			<ReactPlayer 
				url={`https://www.youtube.com/watch?v=${videoKey}`}
				onReady={() => setIsLoaded(true)}
				width={width || '100%'}
				height={height || '100%'}
				playing={isPageVisible && autoPlay}
				controls
			/>
		</PlayerWrapper>
	)
}

VideoPlayer.propTypes = {
	videoKey: PropTypes.string,
}

export default VideoPlayer
