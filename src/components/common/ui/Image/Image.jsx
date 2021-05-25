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
	...rest
}) => {
	return (
		<Background
			className={className}
			width={width}
			height={height}
			circle={circle}
			url={getImageUrl(url, imageSize)}
			{...rest}
		/>
	)
}

Image.propTypes = {
	className: PropTypes.string,
	circle: PropTypes.bool,
	url: PropTypes.string.isRequired,
	imageSize: PropTypes.number,
	width: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	])
}

export default Image
