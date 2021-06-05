import React from 'react'
import PropTypes from 'prop-types'
import FlexBox from 'components/common/ui/FlexBox'
import Image from 'components/common/ui/Image'
import { POSTER_SIZES } from 'constants/imageSizes'
import Text from 'components/common/ui/Text'
import Data from 'components/MediaOverview/Data'

const EpisodeOverview = ({
	still_path,
	name,
	overview,
	air_date,
	episode_number,
	season_number
}) => {
	return (
		<FlexBox>
			<Image
				url={still_path}
				imageSize={POSTER_SIZES.LARGE}
				width={250}
				height={380}
				mr={3}
			/>
			<FlexBox flexDirection='column'>
				<Text
					size={4}
					bold
					color='textPrimary'
					mb={3}
				>
					{name}
				</Text>
				<Text>
					{overview}
				</Text>
				<FlexBox mt={3}>
					<Data
						label='Season'
						value={season_number}
					/>
					<Data
						label='Episode'
						value={episode_number}
					/>
					<Data
						label='Aired'
						value={air_date}
					/>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	)
}

EpisodeOverview.propTypes = {

}

export default EpisodeOverview
