import React from 'react'
import PropTypes from 'prop-types'

import { ListCard as Card } from './AddToList.styles'
import toast from 'react-hot-toast'

const ListCard = ({
	name,
	id,
	addToList
}) => {
	const handleClick = () => {
		addToList(id)
			.then(() => toast.success('Added to list.'))
	}

	return (
		<Card
			key={id}
			onClick={handleClick}
		>
			{name}
		</Card>
	)
}

ListCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	addToList: PropTypes.func.isRequired
}

export default ListCard
