import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import moment from 'moment'

import { getTvDetails } from 'api/endpoints/tv'
import {
	RightSection,
	Wrapper
} from 'components/common/ListItem/ListItem.styles'
import PageTitle from 'components/common/PageTitle'
import Image from 'components/common/ui/Image'
import Link from 'components/common/ui/Link'
import Text from 'components/common/ui/Text'
import { POSTER_SIZES } from 'constants/imageSizes'
import useTitle from 'hooks/useTitle'

const DATE_FORMAT = 'DD MMM YYYY'

const Seasons = () => {
	const { tvId } = useParams()
	const { data } = useQuery(['tv', tvId], () => getTvDetails(tvId))

	useTitle(`Seasons - ${data?.name}`)
	const seasons = data?.seasons || []

	return (
		<div>
			<PageTitle
				ancestors={[{ title: data?.name, path: `/tv/${data?.id}` }]}
				title='Seasons'
			/>
			{seasons.map((item) => (
				<Wrapper
					key={item.id}
					mb={3}
				>
					<Link to={`/tv/${data?.id}/seasons/${item.season_number}`}>
						<Image
							url={item.poster_path}
							width={200}
							imageSize={POSTER_SIZES.MEDIUM}
						/>
					</Link>
					<RightSection>
						<Link
							bold
							color='primary'
							mb={2}
							size={3}
							to={`/tv/${data?.id}/seasons/${item.season_number}`}
						>
							{item.name}
						</Link>
						<Text
							color='textTertiary'
							size={1}
						>
							{moment(item.air_date).format(DATE_FORMAT)}
						</Text>
						<Text my={3}>{item.overview}</Text>
						<Text bold>{item.episode_count} Episodes</Text>
					</RightSection>
				</Wrapper>
			))}
		</div>
	)
}

export default Seasons
