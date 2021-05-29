import React from 'react'
import PropTypes from 'prop-types'

import Card from 'components/common/Card'
import ListItem from 'components/common/ListItem'
import { GridContainer, ListContainer } from './List.styles'
import { GRID, LIST } from './ListContainer'

const List = ({ 
	data = [], 
	itemType
}) => {
	return (
		<>
			{itemType === LIST && (
				<ListContainer>
					{data.map((item) => (
						<ListItem
							key={item.id}
							{...item}
						/>
					))}
				</ListContainer>
			)}
			{itemType === GRID && (
				<GridContainer>
					{data.map((item) => (
						<Card
							key={item.id}
							{...item}
						/>
					))}
				</GridContainer>
			)}
		</>
	)
}

List.propTypes = {
	data: PropTypes.array,
	itemType: PropTypes.string.isRequired
}

export default List
