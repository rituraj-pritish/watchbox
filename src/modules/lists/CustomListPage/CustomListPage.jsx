import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import PageTitle from 'components/common/PageTitle'
import { getList } from 'api/endpoints/lists'
import List from 'components/List'
import ListToggleMenu from '../ListToggleMenu'

const CustomListPage = () => {
	const { listId } = useParams()
	const { data } = useQuery(
		['lists', listId],
		() => getList(listId)
	)

	return (
		<div>
			<PageTitle
				title={data?.name}
				ancestors={[{
					title: 'Lists',
					path: '/lists'
				}]}
				right={(<ListToggleMenu/>)}
			/>
			<List
				data={data?.items}
			/>
		</div>
	)
}

export default CustomListPage
