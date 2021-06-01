import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import PageTitle from 'components/common/PageTitle'
import { capitalize } from 'helpers/string'
import useTitle from 'hooks/useTitle'
import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'

const MediaPage = () => {
	const history = useHistory()
	const { movieId, tvId, mediaType: type } = useParams()
	const mediaType = history.location.pathname.includes('movie')
		? 'movie' : 'tv'
	const mediaId = movieId || tvId

	const { data } = useQuery(
		[mediaType, mediaId],
		() => mediaType === 'movie' ? getMovieDetails(mediaId) : getTvDetails(mediaId),
	)
	useTitle(`${capitalize(type)} - ${data?.title || data?.name}`)

	const list = type === 'videos' ? data.videos.results : data.images
	return (
		<div>
			<PageTitle
				title={type}
				ancestors={[
					{ title: data?.title || data?.name , path: `/${mediaType}/${mediaId}` }
				]}
			/>
		</div>
	)
}

MediaPage.propTypes = {

}

export default MediaPage
