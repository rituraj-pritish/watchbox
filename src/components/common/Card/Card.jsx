import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { getImageUrl } from 'api'
import { BottomSection, Overlay, Poster, Wrapper } from './Card.styled'
import { useState } from '@hookstate/core'
import { GENRE_LIST } from 'components/GlobalState'


const Card = ({ 
	title, 
	name,
	poster_path, 
	vote_average, 
	release_date,
	genre_ids,
}) => {
	const genreById = useState(GENRE_LIST).get()

	const genres = genre_ids.map(id => genreById[id])

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
				{genres.map((genre, idx) => <div key={idx}>{genre}</div>)}
			</Overlay>
			<Poster url={getImageUrl(poster_path, 200)} />
			<BottomSection>
				<div>
					{title || name}
				</div>
			</BottomSection>
		</Wrapper>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	poster_path: PropTypes.string,
	release_date: PropTypes.string,
	vote_average: PropTypes.number,
	genre_ids: PropTypes.arrayOf(PropTypes.string)
}

export default Card
