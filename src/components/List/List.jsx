import React from 'react'
import PropTypes from 'prop-types'

import Card from 'components/common/Card'
import ListItem from 'components/common/ListItem'
import { GridContainer, ListContainer } from './List.styles'
import { GRID, LIST } from './ListContainer'

const List = ({ 
	isLoading,
	data, 
	itemType,
	dataRender,
	itemsOnOnePage
}) => {
	if(dataRender) return dataRender(data)

	return (
		<>
			{itemType === LIST && (
				<ListContainer>
					{isLoading 
						? new Array(itemsOnOnePage).fill(0).map((_, idx) => <ListItem key={idx}/>)
						:data.map((item) => (
							<ListItem
								key={item.id}
								{...item}
							/>
						))}
				</ListContainer>
			)}
			{itemType === GRID && (
				<GridContainer>
					{isLoading
						? new Array(itemsOnOnePage).fill(0).map((_, idx) => <Card key={idx}/>)
						:data.map((item) => (
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
	isLoading: PropTypes.bool.isRequired,
	data: PropTypes.array,
	itemType: PropTypes.string.isRequired,
	dataRender: PropTypes.func,
	itemsOnOnePage: PropTypes.number.isRequired
}

export default List
