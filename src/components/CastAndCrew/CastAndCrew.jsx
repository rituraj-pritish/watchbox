import React from 'react'
import { useHistory, useParams } from 'react-router'
import { useQuery } from 'react-query'

import PageTitle from 'components/common/PageTitle'
import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import useTitle from 'hooks/useTitle'
import List from 'components/List'
import { capitalize } from 'helpers/string'

const CastAndCrew = () => {
	const history = useHistory()
	const { movieId, tvId, creditType } = useParams()
	const mediaType = history.location.pathname.includes('movie')
		? 'movie' : 'tv'
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
				title={creditType}
				ancestors={[
					{ title: data?.title || data?.name , path: `/${mediaType}/${mediaId}` }
				]}
			/>
			<List 
				data={listData}
				onlyGrid
			/>
		</div>
	)
}

export default CastAndCrew
