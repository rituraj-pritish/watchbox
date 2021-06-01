import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Images.styles'
import Text from '../ui/Text'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import ImageCard from './ImageCard'

const Images = ({ 
	data,
	viewAllLink,
	...rest
}) => {
	if(!data) return null
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
				<Link
					size={1}
					to={viewAllLink}
				>
					View all
				</Link>
			</FlexBox>

			<FlexBox
				overflowX='auto'
				pb={2}
			>
				{data.backdrops.slice(0, 20)?.map((item) => (
					<ImageCard
						key={item.key}
						{...item}
					/>	
				)
				)}
			</FlexBox>
		</Wrapper>
	)
}

Images.propTypes = {
	data: PropTypes.object,
	viewAllLink: PropTypes.string
}

export default Images
