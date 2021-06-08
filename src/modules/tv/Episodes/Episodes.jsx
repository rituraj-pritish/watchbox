import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import moment from 'moment'

import { getSeasonDetails, getTvDetails } from 'api/endpoints/tv'
import PageTitle from 'components/common/PageTitle'
import { POSTER_SIZES } from 'constants/imageSizes'
import Image from 'components/common/ui/Image'
import { RightSection, Wrapper } from 'components/common/ListItem/ListItem.styles'
import Link from 'components/common/ui/Link'
import Text from 'components/common/ui/Text'
import useTitle from 'hooks/useTitle'

const DATE_FORMAT = 'DD MMM YYYY'

const Episodes = () => {
	const { tvId, seasonNumber } = useParams()
	const { data: show } = useQuery(['tv', tvId], () => getTvDetails(tvId))
	const { data: season } = useQuery(
		[tvId, 'season', seasonNumber], 
		() => getSeasonDetails(tvId, seasonNumber)
	)
	useTitle(`Episodes - ${season?.name} - ${show?.name}`)

	const episodes = season?.episodes || []

	return (
		<div>
			<PageTitle
				ancestors={[
					{ title: show?.name, path: `/tv/${show?.id}` },
					{ title: 'Seasons', path: `/tv/${show?.id}/seasons` },
					{ title: season?.name, path: `/tv/${show?.id}/seasons/${seasonNumber}` },
				]}
				title='Episodes'
				mb={4}
			/>
			{episodes.map((item) => (
				<Wrapper
					key={item.id}
					mb={3}
				>
					<Link to={`/tv/${tvId}/seasons/${seasonNumber}/episodes/${item.episode_number}`}>
						<Image
							url={item.still_path}
							width={200}
							height='100%'
							flexGrow={1}
							imageSize={POSTER_SIZES.LARGE}
						/>
					</Link>
					<RightSection>
						<Link
							bold
							color='primary'
							mb={2}
							size={3}
							to={`/tv/${tvId}/seasons/${seasonNumber}/episodes/${item.episode_number}`}
						>
							{item.name}
						</Link>
						<Text
							color='textTertiary'
							size={1}
						>
							{moment(item.air_date).format(DATE_FORMAT)}
						</Text>
						<Text mt={3}>Episode {item.episode_number}</Text>
						<Text my={3}>{item.overview}</Text>
					</RightSection>
				</Wrapper>
			))}
		</div>
	)
}

export default Episodes
