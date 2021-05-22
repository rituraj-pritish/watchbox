import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ListIcon } from 'assets/icons/list.svg'
import { ReactComponent as GridIcon } from 'assets/icons/grid.svg'
import Card from 'components/common/Card'
import ListItem from 'components/common/ListItem'
import FlexBox from 'components/common/ui/FlexBox'
import Icon from 'components/common/ui/Icon'
import { GridContainer, ListContainer } from './List.styles'
import Pagination from 'components/common/Pagination'
import Dropdown from 'components/common/Dropdown'

const LIST = 'LIST'
const GRID = 'GRID'

const List = ({ data }) => {
	const [itemType, setItemType] = useState(GRID)

	return (
		<div>
			<FlexBox
				justifyContent='flex-end'
				alignItems='center'
				mb={3}
			>
				<Icon
					color={itemType === GRID ? 'primary' : undefined}
					onClick={() => setItemType(GRID)}
					mr={3}
				>
					<GridIcon/>
				</Icon>
				<Icon 
					color={itemType === LIST ? 'primary' : undefined}
					onClick={() => setItemType(LIST)}
					mr={3}
				>
					<ListIcon/>
				</Icon>
				<Dropdown
					label='Sort'
					options={[]}
				/>
			</FlexBox>

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

			<Pagination mt={4}/>
		</div>
	)
}

List.propTypes = {
	data: PropTypes.array
}

export default List
