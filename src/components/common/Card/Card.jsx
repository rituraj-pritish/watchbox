import React from 'react'
import PropTypes from 'prop-types'

import 'react-circular-progressbar/dist/styles.css'

import { ReactComponent as PlayIcon } from 'assets/icons/play-icon.svg'
import { Overlay, SkeletonWrapper, Wrapper } from './Card.styles'
import Text from '../ui/Text'
import Skeleton from '../ui/Skeleton'
import useTheme from 'hooks/useTheme'
import FlexBox from '../ui/FlexBox'
import Genres from '../Genres'
import Image from '../ui/Image'
import POSTER_SIZES from 'constants/posterSizes'
import TrailerModal from 'components/TrailerModal'

const Card = ({
	id,
	title,
	name,
	poster_path,
	vote_average,
	release_date,
	media_type,
	genre_ids
}) => {
	const { isDarkMode } = useTheme()

	if (!id)
		return (
			<Wrapper isDarkMode={isDarkMode}>
				<SkeletonWrapper>
					<Skeleton
						height='100%'
						mb={2}
					/>
					<Skeleton height={16} />
				</SkeletonWrapper>
			</Wrapper>
		)

	return (
		<Wrapper isDarkMode={isDarkMode}>
			<Overlay isDarkMode={isDarkMode}>
				<div />

				<TrailerModal
					trigger={<PlayIcon />}
					mediaType={title ? 'movie' : 'tv'}
					mediaId={id}
				/>
				
				<Genres
					ids={genre_ids}
					vertical
				/>
			</Overlay>

			<Image
				url={poster_path}
				imageSize={POSTER_SIZES.MEDIUM}
			/>
			<FlexBox
				height={36}
				mt={2}
				alignItems='center'
			>
				<Text bold>{title || name}</Text>
			</FlexBox>
		</Wrapper>
	)
}

Card.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	name: PropTypes.string,
	poster_path: PropTypes.string,
	release_date: PropTypes.string,
	vote_average: PropTypes.number,
	genre_ids: PropTypes.arrayOf(PropTypes.number)
}

export default Card
