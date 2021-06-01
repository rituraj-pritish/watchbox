import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Images.styles'
import Text from '../ui/Text'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import ImageCard from './ImageCard'

const DATA_CHUNK = 20

const Images = ({ 
	data = [],
	viewAllLink,
	...rest
}) => {
	if(!data) return null
	const hasMoreData = data.length > DATA_CHUNK
	return (
		<Wrapper
			{...rest}
		>
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
				{hasMoreData && (
					<Link
						size={1}
						to={viewAllLink}
					>
					View all
					</Link>
				)}
			</FlexBox>

			<FlexBox
				overflowX='auto'
				pb={2}
			>
				{data.slice(0, 20)?.map((item) => (
					<ImageCard
						key={item.file_path}
						{...item}
					/>	
				)
				)}
			</FlexBox>
		</Wrapper>
	)
}

Images.propTypes = {
	data: PropTypes.array,
	viewAllLink: PropTypes.string
}

export default Images
