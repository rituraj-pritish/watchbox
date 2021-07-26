import React from 'react'
import PropTypes from 'prop-types'

import { ListCard as Card } from './AddToList.styles'

const ListCard = ({
	name,
	id,
	addToList
}) => {
	return (
		<Card
			key={id}
			onClick={() => addToList(id)}
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
