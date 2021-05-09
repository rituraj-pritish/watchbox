import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Skeleton from 'react-loading-skeleton'

import { getImageUrl } from 'api'
import {
	BottomSection,
	Overlay,
	Poster,
	SkeletonWrapper,
	Wrapper
} from './Card.styled'
import { useState } from '@hookstate/core'
import { GENRE_LIST } from 'components/GlobalState'
import Text from '../ui/Text'

const Card = ({
	id,
	title,
	name,
	poster_path,
	vote_average,
	release_date,
	genre_ids
}) => {
	if (!id)
		return (
			<Wrapper>
				<SkeletonWrapper>
					<Skeleton height='100%' />
					<BottomSection>
						<Skeleton />
					</BottomSection>
				</SkeletonWrapper>
			</Wrapper>
		)

	const genreById = useState(GENRE_LIST).get()
	const genres = genre_ids.map((id) => genreById[id])

	return (
		<Wrapper>
			<Overlay>
				<div>{moment(release_date).year()}</div>
				<CircularProgressbar
					value={vote_average * 10}
					text={vote_average}
					styles={buildStyles({
						textSize: '30px',
						textColor: 'white',
						pathColor: 'white',
						trailColor: 'grey'
					})}
				/>
				{genres.map((genre, idx) => (
					<div key={idx}>{genre}</div>
				))}
			</Overlay>
			<Poster url={getImageUrl(poster_path, 200)} />
			<BottomSection>
				<Text bold>{title || name}</Text>
			</BottomSection>
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
