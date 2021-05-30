import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Images.styles'
import Text from '../ui/Text'
import Modal from '../Modal'
import Image from '../ui/Image'
import FlexBox from '../ui/FlexBox'
import { BACKDROP_SIZES } from 'constants/imageSizes'
import Link from '../ui/Link'

const Images = ({ 
	data,
	viewAllLink,
	...rest
}) => {
	return (
		<Wrapper {...rest}>
			<FlexBox
				justifyContent='space-between'
				alignItems='flex-end'
				mb={4}
			>
				<Text
					bold
					size={4}
					color='textPrimary'
				>
        Images
				</Text>
				<Link to={viewAllLink}>View all</Link>
			</FlexBox>

			<FlexBox
				overflowX='auto'
			>
				{data.backdrops.slice(0, 20).map((item) => {
					const { file_path, aspect_ratio } = item
					const isBackdrop = aspect_ratio > 1
					const triggerHeight = 300
					const expandedHeight = 50
					return (
						<Modal
							key={file_path}
							trigger={(
								<Image
									height={triggerHeight}
									width={triggerHeight * aspect_ratio}
									imageSize={isBackdrop ? BACKDROP_SIZES.MEDIUM : undefined}
									url={file_path}
									mr={3}
									mb={3}
								/>
							)}
							styles={{
								height: 'fit-content',
								width: 'fit-content'
							}}
						>
							<Image
								url={file_path}
								height={`${expandedHeight}vh`}
								width={`${expandedHeight * aspect_ratio}vh`}
								imageSize={null}
							/>
						</Modal>
					)
				})}
			</FlexBox>
		</Wrapper>
	)
}

Images.propTypes = {
	data: PropTypes.object,
	viewAllLink: PropTypes.string
}

export default Images
