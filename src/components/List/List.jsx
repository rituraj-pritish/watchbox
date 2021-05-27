import React, { useEffect, useState } from 'react'
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
import useUrlParams from 'hooks/useUrlParams'

const LIST = 'LIST'
const GRID = 'GRID'

const ITEMS_IN_PAGE = 20

const List = ({ data = [], onlyGrid = false }) => {
	const [itemType, setItemType] = useState(GRID)
	const { p: page } = useUrlParams(['p'])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [page])
	
	const factor = (page || 1) - 1
	const currentPageData = data.slice(
		factor * ITEMS_IN_PAGE,
		factor * ITEMS_IN_PAGE + ITEMS_IN_PAGE
	)
	
	return (
		<div>
			<FlexBox
				justifyContent='flex-end'
				alignItems='center'
				mb={3}
			>
				{!onlyGrid && (
					<>
						<Icon
							color={itemType === GRID ? 'primary' : undefined}
							onClick={() => setItemType(GRID)}
							mr={3}
						>
							<GridIcon />
						</Icon>
						<Icon
							color={itemType === LIST ? 'primary' : undefined}
							onClick={() => setItemType(LIST)}
							mr={3}
						>
							<ListIcon />
						</Icon>
					</>
				)}
				<Dropdown
					label='Sort'
					options={[]}
				/>
			</FlexBox>

			{itemType === LIST && (
				<ListContainer>
					{currentPageData.map((item) => (
						<ListItem
							key={item.id}
							{...item}
						/>
					))}
				</ListContainer>
			)}

			{itemType === GRID && (
				<GridContainer>
					{currentPageData.map((item) => (
						<Card
							key={item.id}
							{...item}
						/>
					))}
				</GridContainer>
			)}

			{data.length > ITEMS_IN_PAGE && (
				<Pagination
					mt={4}
					totalPages={parseInt(data.length / ITEMS_IN_PAGE) + 1}
				/>
			)}
		</div>
	)
}

List.propTypes = {
	data: PropTypes.array,
	onlyGrid: PropTypes.bool
}

export default List
