import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'

import { getTvDetails } from 'api/endpoints/tv'
import Carousel from 'components/common/Carousel/Carousel'
import MediaOverview from 'components/MediaOverview'
import useTitle from 'hooks/useTitle'

const TV = () => {
	const { tvId } = useParams()
	const { data } = useQuery(
		['tv', tvId],
		() => getTvDetails(tvId),
	)

	useTitle(`${data?.name} - TV`)

	return (
		<>
			<MediaOverview {...data} />
			<Carousel
				title='Cast'
				person
				data={data?.credits?.cast}
				viewAllLink={`/tv/${tvId}/cast`}
				my={3}
			/>

			<Carousel
				title='Crew'
				person
				data={data?.credits?.crew}
				viewAllLink={`/tv/${tvId}/crew`}
			/>
		</>
	)
}

export default TV
