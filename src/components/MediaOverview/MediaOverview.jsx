import React from 'react'
import PropTypes from 'prop-types'

import { Background, Overview, Wrapper } from './MediaOverview.styles'
import { BACKDROP_SIZES } from 'constants/imageSizes'
import Text from 'components/common/ui/Text'
import Image from 'components/common/ui/Image'
import FlexBox from 'components/common/ui/FlexBox'
import MediaActions from 'components/MediaActions'
import Genres from 'components/common/Genres'
import { minutesToHoursMinutes } from 'helpers/timeConversions'
import Skeleton from 'components/common/ui/Skeleton'

const MediaOverview = ({
	title,
	name,
	backdrop_path,
	poster_path,
	tagline,
	overview,
	id,
	genres,
	runtime,
	release_date,
	number_of_seasons
}) => {
	if(!id) {
		return <Skeleton height={400}/>
	}

	return (
		<Wrapper>
			<Background
				height={400}
				url={backdrop_path}
				imageSize={BACKDROP_SIZES.LARGE}
			/>

			<Overview>
				<Image
					url={poster_path}
					width={250}
					height={380}
					my={3}
					mr={3}
				/>
				<FlexBox
					flexDirection='column'
					my={3}
				>
					<Text
						size={5}
						color='primary'
						bold
						mb={3}
					>
						{title || name}
					</Text>
					{runtime && <Text>{minutesToHoursMinutes(runtime)}</Text>}
					{number_of_seasons && <Text>{number_of_seasons} Seasons</Text>}
					<Text
						italic
						size={3}
						mt={3}
					>
						{tagline}
					</Text>
					<Text 
						my={3}
						maxLines={6}
					>
						{overview}
					</Text>

					<MediaActions
						mediaType={title ? 'movie' : 'tv'}
						mediaId={id}
					/>
					<FlexBox mt={3}/>
					<Genres
						ids={genres?.map(({ id }) => id)}
					/>

					<FlexBox
						mt={3}
						flexDirection='column'
					>
						<Text
							size={1}
							bold
						>
							Released
						</Text>
						<Text>{release_date}</Text>
					</FlexBox>
				</FlexBox>
			</Overview>
		</Wrapper>
	)
}

MediaOverview.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	backdrop_path: PropTypes.string,
	poster_path: PropTypes.string,
	tagline: PropTypes.string,
	overview: PropTypes.string,
	id: PropTypes.number,
	genres: PropTypes.array,
	runtime: PropTypes.number,
	release_date: PropTypes.string,
}

export default MediaOverview
