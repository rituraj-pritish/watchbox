import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useUrlParams from 'hooks/useUrlParams'
import { useQuery } from 'react-query'
import { discover } from 'api/endpoints/discover'
import List from 'components/List'
import useTitle from 'hooks/useTitle'
import { capitalize } from 'helpers/string'

const Discover = () => {
	const { mediaType } = useParams()
	const urlParams = useUrlParams(['genreId', 'p'])
	const { genreId, p: page } = urlParams

	useTitle(`Discover - ${capitalize(mediaType)}`)

	const { data, refetch, isFetching } = useQuery(
		['discover', mediaType],
		() => discover(mediaType, { with_genres: genreId, page: page || 1 })
	)

	useEffect(() => {
		refetch()
	}, [...Object.values(urlParams)])

	return (
		<div>
			<List
				data={!isFetching ? data?.results : null}
				totalResults={data?.total_results}
			/>
		</div>
	)
}

export default Discover
