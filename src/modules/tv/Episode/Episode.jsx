import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import {
	getEpisodeDetails,
	getSeasonDetails,
	getTvDetails
} from 'api/endpoints/tv'
import PageTitle from 'components/common/PageTitle'
import Carousel from 'components/common/Carousel/Carousel'
import Images from 'components/common/Images'
import EpisodeOverview from './EpisodeOverview'
import useTitle from 'hooks/useTitle'

const Episode = () => {
	const { tvId, seasonNumber, episodeNumber } = useParams()
	const { data: show } = useQuery(['tv', tvId], () => getTvDetails(tvId))
	const { data: season } = useQuery([tvId, 'season', seasonNumber], () =>
		getSeasonDetails(tvId, seasonNumber)
	)
	const { data: episode } = useQuery(
		[tvId, 'season', seasonNumber, 'episodes', episodeNumber],
		() => getEpisodeDetails(tvId, seasonNumber, episodeNumber)
	)
	useTitle(`Episode ${episode?.episode_number} - ${season?.name} - ${show?.name}`)

	return (
		<div>
			<PageTitle
				ancestors={[
					{ title: show?.name, path: `/tv/${show?.id}` },
					{ title: 'Seasons', path: `/tv/${show?.id}/seasons` },
					{
						title: season?.name,
						path: `/tv/${show?.id}/seasons/${seasonNumber}`
					},
					{
						title: 'Episodes',
						path: `/tv/${show?.id}/seasons/${seasonNumber}/episodes`
					}
				]}
				title='Episode'
			/>
			<EpisodeOverview {...episode}/>
			<Carousel
				title='Guest Stars'
				data={episode?.guest_stars}
				my={4}
			/>
			<Images
				data={episode?.images?.stills}
			/>
			<Carousel
				title='Cast'
				data={episode?.credits?.cast}
				mt={3}
			/>
		</div>
	)
}

export default Episode
