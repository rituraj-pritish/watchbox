import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'

import PageTitle from 'components/common/PageTitle'
import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import useTitle from 'hooks/useTitle'
import List from 'components/List'
import { capitalize } from 'helpers/string'
import { filterFn } from 'helpers/array'

const CastAndCrew = () => {
	const { movieId, tvId, creditType } = useParams()
	const mediaType = movieId ? 'movie' : 'tv'
	const mediaId = movieId || tvId

	const { data } = useQuery(
		[mediaType, mediaId],
		() => mediaType === 'movie' ? getMovieDetails(mediaId) : getTvDetails(mediaId),
	)
	useTitle(`${capitalize(creditType)} - ${data?.title || data?.name}`)

	const listData = data?.credits?.[creditType]
	
	return (
		<div>
			<PageTitle
				ancestors={[
					{ title: data?.title || data?.name , path: `/${mediaType}/${mediaId}` }
				]}
				title={creditType}
			/>
			<List 
				data={listData}
				onlyGrid
				filter={{
					initialValue: 'all',
					options: [
						{ label: 'All', value: 'all' },
						{ label: 'Male', value: 'gender/2' },
						{ label: 'Female', value: 'gender/1' }
					],
					filterFn: filterFn
				}}
			/>
		</div>
	)
}

export default CastAndCrew
