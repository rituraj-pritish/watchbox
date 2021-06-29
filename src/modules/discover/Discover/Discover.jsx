import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useUrlParams from 'hooks/useUrlParams'
import { useQuery } from 'react-query'
import { discover, getMediaByType } from 'api/endpoints/discover'
import List from 'components/List'
import useTitle from 'hooks/useTitle'
import PageTitle from 'components/common/PageTitle'
import { camelCasedToNormal, capitalize } from 'helpers/string'

const Discover = () => {
	const { mediaType } = useParams()
	const urlParams = useUrlParams([
		'genreId',
		'p',
		'type'
	])
	const { 
		genreId, 
		p: page,
		type
	} = urlParams

	useTitle(`Discover - ${capitalize(mediaType)}`)

	const { data, refetch, isFetching } = useQuery(
		['discover', mediaType],
		() => type
			? getMediaByType(mediaType, type, page || 1)
			: discover(mediaType, { with_genres: genreId, page: page || 1 })
	)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [type, mediaType])

	useEffect(() => {
		refetch()
	}, [...Object.values(urlParams)])

	return (
		<div>
			<PageTitle
				title={camelCasedToNormal(type) + ' ' + (mediaType === 'tv' ? 'Shows' : 'Movies')}
			/>
			<List
				data={!isFetching ? data?.results : null}
				totalResults={data?.total_results}
			/>
		</div>
	)
}

export default Discover
