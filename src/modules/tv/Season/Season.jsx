import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { getSeasonDetails, getTvDetails } from 'api/endpoints/tv'
import PageTitle from 'components/common/PageTitle'
import useTitle from 'hooks/useTitle'
import Carousel from 'components/common/Carousel/Carousel'
import Images from 'components/common/Images'
import Videos from 'components/common/Videos'
import SeasonOverview from './SeasonOverview'
import { POSTER_SIZES } from 'constants/imageSizes'

const Season = () => {
	const { tvId, seasonNumber } = useParams()
	const { data: show } = useQuery(['tv', tvId], () => getTvDetails(tvId))
	const { data: season } = useQuery(
		[tvId, 'season', seasonNumber], 
		() => getSeasonDetails(tvId, seasonNumber)
	)

	useTitle(`${season?.name} - ${show?.name}`)

	const episodes = season
		? season.episodes.map(({
			id,
			still_path, 
			name, 
			episode_number
		}) => ({
			id,
			title: name,
			subTitle: `Episode ${episode_number}`,
			image_path: still_path,
			imageSize: POSTER_SIZES.LARGE,
			link: `/tv/${tvId}/seasons/${seasonNumber}/episodes/${episode_number}`
		}))
		: []

	return (
		<div>
			<PageTitle
				ancestors={[
					{ title: show?.name, path: `/tv/${show?.id}` },
					{ title: 'Seasons', path: `/tv/${show?.id}/seasons` }
				]}
				title='Season'
				mb={4}
			/>
			<SeasonOverview {...season} />
			<Carousel
				title='Cast'
				person
				data={season?.credits?.cast}
				viewAllLink={`/tv/${tvId}/credits/cast`}
				my={3}
			/>

			<Carousel
				title='Episodes'
				data={episodes}
				viewAllLink={`/tv/${tvId}/seasons/${seasonNumber}/episodes`}
			/>

			<Images
				data={season ? [...season?.images?.posters] : []}
				mb={4}
				viewAllLink={`/tv/${season?.id}/media/photos`}
			/>
			<Videos 
				data={season?.videos?.results}
				viewAllLink={`/tv/${season?.id}/media/videos`}
			/>

			<Carousel
				title='Crew'
				person
				data={season?.credits?.crew}
				viewAllLink={`/tv/${tvId}/credits/crew`}
				mt={4}
			/>
		</div>
	)
}

export default Season
