import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from 'components/common/ui/Image'
import { ListCard, CardLabel } from './AllLists.styles'
import posters from './posters.jpg'
import Text from 'components/common/ui/Text'
import ListToggleMenu from '../ListToggleMenu'

const Card = ({ list, to, label, imageUrl }) => {
	const toggleMenuRef = useRef()
	
	return (
		<ListCard
			onMouseLeave={toggleMenuRef?.current?.close}
		>
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
			{!!list && (
				<ListToggleMenu
					menuRef={toggleMenuRef}
					list={list}
				/>
			)}
		</ListCard>
	)
}

Card.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	list: PropTypes.object
}

export default Card
