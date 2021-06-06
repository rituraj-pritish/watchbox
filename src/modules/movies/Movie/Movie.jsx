import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { getMovieDetails } from 'api/endpoints/movies'
import Carousel from 'components/common/Carousel/Carousel'
import MediaOverview from 'components/MediaOverview'
import useTitle from 'hooks/useTitle'
import Images from 'components/common/Images'
import Videos from 'components/common/Videos/Videos'

const Movie = () => {
	const { movieId } = useParams()
	const { data } = useQuery(
		['movie', movieId],
		() => getMovieDetails(movieId),
	)

	useTitle(`${data?.title} - Movie`)

	return (
		<>
			<MediaOverview {...data} />
			<Carousel
				title='Cast'
				person
				data={data?.credits?.cast}
				viewAllLink={`/movie/${movieId}/credits/cast`}
				mt={4}
			/>
			<Images
				data={data?.images}
				my={4}
				viewAllLink={`/movie/${data?.id}/media/photos`}
			/>
			
			<Videos 
				data={data?.videos?.results}
				viewAllLink={`/movie/${data?.id}/media/videos`}
			/>

			<Carousel
				title='Crew'
				person
				data={data?.credits?.crew}
				viewAllLink={`/movie/${movieId}/credits/crew`}
				mt={4}
			/>
		</>
	)
}

export default Movie
