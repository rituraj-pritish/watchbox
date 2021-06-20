import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

import api from 'api'
import Text from 'components/common/ui/Text'
import List from 'components/List'
import useUrlParams from 'hooks/useUrlParams'
import useTitle from 'hooks/useTitle'

const SearchResults = () => {
	useTitle('Search')
	const { query, p: page } = useUrlParams(['query', 'p'])

	const { 
		data, 
		refetch, 
		isFetching, 
		isFetched
	} = useQuery(
		['search', query, page || 1],
		() => api('/search/multi', {}, { page, query }),
		{ enabled: false, keepPreviousData: true }
	)

	useEffect(() => {
		refetch()
	}, [page])

	useEffect(() => { 
		if(!isFetching && !isFetched) {
			refetch()
		}
	}, [])

	return (
		<div>
			<Text>
        Search results for 
				<Text 
					inline 
					bold
					display='inline'
					ml={1}
				>
					{query}
				</Text>
			</Text>    

			<List
				data={data?.results || []}
				totalResults={data?.total_results}
			/>
		</div>
	)
}

export default SearchResults
