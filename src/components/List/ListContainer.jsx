import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ListIcon } from 'assets/icons/list.svg'
import { ReactComponent as GridIcon } from 'assets/icons/grid.svg'
import Icon from 'components/common/ui/Icon'
import useUrlParams from 'hooks/useUrlParams'
import { Wrapper } from './List.styles'
import Pagination from 'components/common/Pagination'
import FlexBox from 'components/common/ui/FlexBox'
import Dropdown from 'components/common/Dropdown'
import { getUniqueArrayOfObjects } from 'helpers/array'
import List from './List'

export const LIST = 'LIST'
export const GRID = 'GRID'
const ITEMS_IN_PAGE = 20

const getSortState = (value) => {
	if (!value) return null
	return {
		value: value.split('/')[0],
		order: value.split('/')[1]
	}
}

const getFilterState = (value) => {
	if (!value) return null
	return {
		value: value.split('/')[0],
		compareValue: value.split('/')[1]
	}
}

const ListContainer = ({
	data = [],
	onlyGrid = false,
	sort = {},
	filter = {}
}) => {
	const [itemType, setItemType] = useState(GRID)
	const [sortOption, setSortOption] = useState(getSortState(sort.initialValue))
	const [filterOption, setFilterOption] = useState(
		getFilterState(filter.initialValue)
	)
	const { p: page } = useUrlParams(['p'])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [page])

	const factor = (page || 1) - 1
	const uniqueData = getUniqueArrayOfObjects(data, 'id')

	let dataCopy = uniqueData

	useEffect(() => {
		dataCopy = uniqueData
	}, [filterOption])

	const filteredData = filter.filterFn
		? filter.filterFn(dataCopy, filterOption.value, filterOption.compareValue)
		: dataCopy
	const sortedData = sort.sortFn
		? sort.sortFn(filteredData, sortOption.value, sortOption.order)
		: filteredData

	const currentPageData = sortedData.slice(
		factor * ITEMS_IN_PAGE,
		factor * ITEMS_IN_PAGE + ITEMS_IN_PAGE
	)

	return (
		<Wrapper>
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
				{filter.options && (
					<Dropdown
						label='Filter'
						options={filter.options}
						value={filterOption.value}
						onChange={(val) => setFilterOption(getFilterState(val))}
						mr={3}
					/>
				)}
				{sort.options && (
					<Dropdown
						label='Sort'
						options={sort.options}
						value={Object.values(sortOption).join('/')}
						onChange={(val) => setSortOption(getSortState(val))}
					/>
				)}
			</FlexBox>
			<List
				data={currentPageData}
				itemType={itemType}
			/>
			<FlexBox flexGrow={1} />
			{sortedData.length > ITEMS_IN_PAGE && (
				<Pagination
					mt={4}
					totalPages={parseInt(filteredData.length / ITEMS_IN_PAGE) + 1}
				/>
			)}
		</Wrapper>
	)
}

ListContainer.propTypes = {
	data: PropTypes.array.isRequired,
	onlyGrid: PropTypes.bool,
	sort: PropTypes.shape({
		options: PropTypes.array.isRequired,
		initialValue: PropTypes.string.isRequired,
		sortFn: PropTypes.func.isRequired
	}),
	filter: PropTypes.shape({
		options: PropTypes.array.isRequired,
		initialValue: PropTypes.string.isRequired,
		filterFn: PropTypes.func.isRequired
	})
}

export default ListContainer
