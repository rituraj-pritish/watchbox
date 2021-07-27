import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Images.styles'
import Text from '../ui/Text'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import ImageCard from './ImageCard'
import { shuffleArray } from 'helpers/array'
import Skeleton from '../ui/Skeleton'
import usePositionOffset from 'hooks/usePositionOffset'

const DATA_CHUNK = 20

const Images = ({ 
	data,
	viewAllLink,
	...rest
}) => {
	const [ref, isTriggered] = usePositionOffset(300)

	const images = React.useMemo(() => data 
		? shuffleArray(Object.values(data).flat()) 
		: [],
	[data])
	const hasMoreData = images.length > DATA_CHUNK

	const render = () => {
		if(!isTriggered) return null
		
		if(!data) return new Array(3).fill(0).map((_, idx) => (
			<Skeleton
				key={idx}
				width={500}
				height={300}
				mr={3}
				mb={3}
			/>
		))

		if(data && images.length === 0) return (
			<FlexBox
				width='100%'
				height={300}
				justifyContent='center'
				alignItems='center'
			>
				No images available
			</FlexBox>
		)

		return images.slice(0, DATA_CHUNK)?.map((item) => (
			<ImageCard
				key={item.file_path}
				{...item}
			/>	
		))
	}

	return (
		<Wrapper
			data-testid='Photos-section'
			ref={ref}
			{...rest}
		>
			<FlexBox
				justifyContent='space-between'
				alignItems='flex-end'
			>
				<Text
					bold
					size={4}
					color='textPrimary'
				>
        Photos
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
				pt={4}
				pb={2}
			>
				{render()}
			</FlexBox>
		</Wrapper>
	)
}

Images.propTypes = {
	data: PropTypes.object,
	viewAllLink: PropTypes.string
}

export default React.memo(Images)
