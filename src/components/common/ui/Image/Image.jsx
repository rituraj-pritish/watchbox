import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { getImageUrl } from 'api'
import { Background, StyledSkeleton, Wrapper } from './Image.styles'

const ImageComp = ({ 
	url, 
	imageSize = 185, 
	width = '100%', 
	height = '100%',
	circle = false,
	className,
	fallback,
	directUrl,
	...rest
}) => {
	const getUrl = () => {
		if(url) return getImageUrl(url, imageSize)
		if(directUrl) return directUrl
	}
	
	const [isLoaded, setIsLoaded] = useState(() => getUrl() ? false : true)

	const img = new Image()
	img.onload = () => setIsLoaded(true)
	img.src = getUrl()

	return (
		<Wrapper
			height={height}
			width={width}
			{...rest}
		>
			{
				(!isLoaded) && (
					<StyledSkeleton circle={circle}/>
				)
			}
			<Background
				className={className}
				width={width}
				height={height}
				circle={circle}
				url={getUrl()}
				fallback={fallback}
			/>
		</Wrapper>
	)
}

ImageComp.propTypes = {
	className: PropTypes.string,
	circle: PropTypes.bool,
	url: PropTypes.string,
	directUrl: PropTypes.string,
	imageSize: PropTypes.number,
	width: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]),
	fallback: PropTypes.string
}

export default ImageComp
