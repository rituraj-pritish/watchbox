import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { getImageUrl } from 'api'
import { BottomSection, StyledImage, Wrapper } from './Card.styled'


const Card = ({ 
	title, 
	poster_path, 
	backdrop_path, 
	release_date,
	...props 
}) => {
	return (
		<Wrapper>
			<StyledImage src={getImageUrl(poster_path, 200)} />
			<BottomSection>
				<div>
					{title}
				</div>
				<div>{moment(release_date).year()}</div>
			</BottomSection>
		</Wrapper>
	)
}

Card.propTypes = {}

export default Card
