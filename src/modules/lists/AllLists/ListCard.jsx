import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from 'components/common/ui/Image'
import { ListCard, CardLabel } from './AllLists.styles'
import posters from './posters.jpg'
import Text from 'components/common/ui/Text'
import ListToggleMenu from '../ListToggleMenu'

const Card = ({ id, to, label, imageUrl }) => (
	<ListCard>
		<Link to={to}>
			<Image
				url={imageUrl}
				directUrl={posters}
				height='150px'
			/>
			<CardLabel>
				<Text
					size={4}
					bold
				>
					{label}
				</Text>
			</CardLabel>
		</Link>
		{!!id && <ListToggleMenu id={id}/>}
	</ListCard>
)

Card.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	id: PropTypes.number
}

export default Card
