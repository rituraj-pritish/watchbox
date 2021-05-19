import React from 'react'
import PropTypes from 'prop-types'

import { getImageUrl } from 'api'
import { Background } from './Image.styles'

const Image = ({ 
	url, 
	imageSize = 185, 
	width = '100%', 
	height = '100%' 
}) => {
	return (
		<Background
			width={width}
			height={height}
			url={getImageUrl(url, imageSize)}
		/>
	)
}

Image.propTypes = {
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
