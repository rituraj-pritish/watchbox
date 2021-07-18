import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import PageTitle from 'components/common/PageTitle'
import useTitle from 'hooks/useTitle'
import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import List from 'components/List'
import Review from 'components/common/Review'

const Reviews = () => {
	const { movieId, tvId } = useParams()
	const mediaType = movieId ? 'movie' : 'tv'
	const mediaId = movieId || tvId

	const { data } = useQuery(
		[mediaType, mediaId],
		() => mediaType === 'movie' ? getMovieDetails(mediaId) : getTvDetails(mediaId),
	)
	useTitle(`Reviews - ${data?.title || data?.name}`)

	const reviews = data?.reviews?.results
	return (
		<div>
			<PageTitle
				ancestors={[
					{ title: data?.title || data?.name , path: `/${mediaType}/${mediaId}` }
				]}
				title='Reviews'
			/>
			<List
				onlyGrid
				data={reviews}
				dataRender={data => data.map(item => (
					<Review
						key={item.id}
						{...item}
					/>
				))}
			/>
		</div>
	)
}

export default Reviews
