import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from 'components/common/ui/Image'
import { ListCard, CardLabel } from './AllLists.styles'
import posters from './posters.jpg'
import Text from 'components/common/ui/Text'
import ToggleMenu from 'components/common/ToggleMenu'

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
		{!!id && (
			<ToggleMenu>
				<Text>Edit</Text>
				<Text color='danger'>Delete</Text>
			</ToggleMenu>
		)}
	</ListCard>
)

Card.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	imageUrl: PropTypes.string
}

export default Card
