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
import Tooltip from 'components/common/Tooltip/Tooltip'

const VIEW_TYPE_KEY = 'list_view_type'
export const LIST = 'LIST'
export const GRID = 'GRID'

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

const getListView = (onlyGrid) => {
	if(onlyGrid) return GRID
	return window.localStorage.getItem(VIEW_TYPE_KEY) || GRID
}

const ListContainer = ({
	data,
	onlyGrid = false,
	sort = {},
	filter = {},
	uniqueIdentifier = 'id',
	totalResults,
	dataRender,
	itemsOnOnePage = 20,
	styles
}) => {
	const [itemType, setItemType] = useState(() => getListView(onlyGrid))
	const [sortOption, setSortOption] = useState(getSortState(sort.initialValue))
	const [filterOption, setFilterOption] = useState(
		getFilterState(filter.initialValue)
	)
	const { p: page } = useUrlParams(['p'])
	
	const factor = (page || 1) - 1
	const uniqueData = getUniqueArrayOfObjects(data || [], uniqueIdentifier)

	useEffect(() => {
		dataCopy = uniqueData
	}, [filterOption])

	const handleViewChange = view => {
		setItemType(view)
		window.localStorage.setItem(VIEW_TYPE_KEY, view)
	}

	let dataCopy = uniqueData

	const filteredData = filter.filterFn
		? filter.filterFn(dataCopy, filterOption.value, filterOption.compareValue)
		: dataCopy
	const sortedData = sort.sortFn
		? sort.sortFn(filteredData, sortOption.value, sortOption.order)
		: filteredData

	const currentPageData = totalResults
		? data
		: sortedData.slice(
			factor * itemsOnOnePage,
			factor * itemsOnOnePage + itemsOnOnePage
		)

	return (
		<Wrapper extendedStyles={styles?.wrapper}>
			<FlexBox
				justifyContent='flex-end'
				alignItems='center'
				mb={(!onlyGrid || sort.options || filter.options) ? 3 : undefined}
			>
				{!onlyGrid && (
					<>
						<Tooltip tooltip='Grid view'>
							<Icon
								color={itemType === GRID ? 'primary' : undefined}
								onClick={() => handleViewChange(GRID)}
								mr={3}
							>
								<GridIcon />
							</Icon>
						</Tooltip>
						<Tooltip tooltip='List view'>
							<Icon
								color={itemType === LIST ? 'primary' : undefined}
								onClick={() => handleViewChange(LIST)}
							>
								<ListIcon />
							</Icon>
						</Tooltip>
					</>
				)}
				{filter.options && (
					<Dropdown
						label='Filter'
						options={filter.options}
						value={filterOption.value}
						onChange={(val) => {
							setFilterOption(getFilterState(val))
							if(filter.onChange) filter.onChange(val)
						}}
						ml={3}
					/>
				)}
				{sort.options && (
					<Dropdown
						label='Sort'
						options={sort.options}
						value={Object.values(sortOption).join('/')}
						onChange={(val) => {
							setSortOption(getSortState(val))
							if(sort.onChange) sort.onChange(val)
						}}
						ml={3}
					/>
				)}
			</FlexBox>
			<List
				isLoading={!data}
				itemsOnOnePage={itemsOnOnePage}
				data={currentPageData}
				itemType={itemType}
				dataRender={dataRender}
			/>
			<FlexBox flexGrow={1} />
			{(totalResults || sortedData.length) > itemsOnOnePage && (
				<Pagination
					mt={4}
					totalPages={parseInt((totalResults || filteredData.length) / itemsOnOnePage) + 
						(parseInt((totalResults || filteredData.length) % itemsOnOnePage) ? 1 : 0) }
				/>
			)}
		</Wrapper>
	)
}

ListContainer.propTypes = {
	data: PropTypes.array,
	onlyGrid: PropTypes.bool,
	uniqueIdentifier: PropTypes.string,
	dataRender: PropTypes.func,
	sort: PropTypes.shape({
		options: PropTypes.array.isRequired,
		initialValue: PropTypes.string.isRequired,
		sortFn: PropTypes.func.isRequired
	}),
	filter: PropTypes.shape({
		options: PropTypes.array.isRequired,
		initialValue: PropTypes.string.isRequired,
		filterFn: PropTypes.func.isRequired
	}),
	itemsOnOnePage: PropTypes.number,
	totalResults: PropTypes.number,
	styles: PropTypes.object
}

export default ListContainer
