import React from 'react'
import PropTypes from 'prop-types'
import { useState } from '@hookstate/core'

import 'react-circular-progressbar/dist/styles.css'

import { ReactComponent as PlayIcon } from 'assets/icons/play-icon.svg'
import { getImageUrl } from 'api'
import { Overlay, Poster, SkeletonWrapper, Wrapper } from './Card.styles'
import { GENRE_LIST } from 'components/GlobalState'
import Text from '../ui/Text'
import Skeleton from '../ui/Skeleton'
import useTheme from 'hooks/useTheme'
import FlexBox from '../ui/FlexBox'

const Card = ({
	id,
	title,
	name,
	poster_path,
	vote_average,
	release_date,
	genre_ids
}) => {
	const { isDarkMode } = useTheme()

	if (!id)
		return (
			<Wrapper>
				<SkeletonWrapper>
					<Skeleton
						height='100%'
						mb={2}
					/>
					<Skeleton height={16} />
				</SkeletonWrapper>
			</Wrapper>
		)

	const genreById = useState(GENRE_LIST).get()
	const genres = genre_ids.map((id) => genreById[id])

	return (
		<Wrapper isDarkMode={isDarkMode}>
			<Overlay isDarkMode={isDarkMode}>
				<div/>
				
				<PlayIcon/>

				<div>
					{genres.map((g) => (
						<Text
							align='center'
							key={g}
						>
							{g}
						</Text>
					))}
				</div>
			</Overlay>

			<Poster url={getImageUrl(poster_path)} />
			<FlexBox
				height={36}
				mt={2}
				alignItems='center'
			>
				<Text
					bold
				>
					{title || name}
				</Text>
			</FlexBox>
		</Wrapper>
	)
}

Card.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	name: PropTypes.string,
	poster_path: PropTypes.string,
	release_date: PropTypes.string,
	vote_average: PropTypes.number,
	genre_ids: PropTypes.arrayOf(PropTypes.number)
}

export default Card
