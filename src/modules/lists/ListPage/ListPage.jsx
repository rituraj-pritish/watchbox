import React from 'react'
import { useParams } from 'react-router-dom'

import PageTitle from 'components/common/PageTitle'
import useFavorites from 'hooks/useFavorites'
import useWatchlist from 'hooks/useWatchlist'
import List from 'components/List'
import { filterFn, sortFn } from 'helpers/array'
import useTitle from 'hooks/useTitle'

const ListPage = () => {
	const { listName } = useParams()
	const { favorites } = useFavorites()
	const { watchlist } = useWatchlist()

	const list = listName === 'favorites' ? favorites : watchlist
	useTitle(listName)
	return (
		<div>
			{/* <PageTitle
				title={listName}
				ancestors={[{
					title: 'Lists',
					path: '/lists'
				}]}
			/> */}
			<List
				data={list}
				filter={{
					initialValue: 'all',
					options: [
						{ label: 'All', value: 'all' },
						{ label: 'Movies', value: 'title' },
						{ label: 'TV Shows', value: 'name' }
					],
					filterFn: filterFn
				}}
				sort={{
					initialValue: 'popularity/desc',
					options: [
						{ label: 'Popularity', value: 'popularity/desc' },
						{ label: 'Rating', value: 'vote_average/desc' }
					],
					sortFn: sortFn
				}}
			/>
		</div>
	)
}

export default ListPage
