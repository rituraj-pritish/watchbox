import React from 'react'
import PropTypes from 'prop-types'

import { getImageUrl } from 'api'
import { Background } from './Image.styles'

const Image = ({ 
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

	return (
		<Background
			className={className}
			width={width}
			height={height}
			circle={circle}
			url={getUrl()}
			fallback={fallback}
			{...rest}
		/>
	)
}

Image.propTypes = {
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

export default Image
