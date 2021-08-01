import React from 'react'
import PropTypes from 'prop-types'

import Image from '../ui/Image'
import { BACKDROP_SIZES } from 'constants/imageSizes'
import Modal from '../Modal'
import { StyledImage } from './Images.styles'

const ImageCard = ({
	file_path,
	aspect_ratio,
	triggerStyles
}) => {
	const isBackdrop = aspect_ratio > 1
	const triggerHeight = 300

	return (
		<Modal
			key={file_path}
			trigger={(
				<StyledImage
					height={triggerHeight}
					width={triggerHeight * aspect_ratio}
					imageSize={isBackdrop ? BACKDROP_SIZES.MEDIUM : undefined}
					url={file_path}
					mr={3}
					{...triggerStyles}
				/>
			)}
			aspectRatio={aspect_ratio}
		>
			<Image
				url={file_path}
				imageSize={null}
			/>
		</Modal>
	)
}

ImageCard.propTypes = {
	file_path: PropTypes.string.isRequired,
	aspect_ratio: PropTypes.number,
	triggerStyles: PropTypes.object
}

export default ImageCard
