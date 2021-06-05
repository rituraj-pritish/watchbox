import React from 'react'

import PropTypes from 'prop-types'
import FlexBox from 'components/common/ui/FlexBox'
import Image from 'components/common/ui/Image'
import { POSTER_SIZES } from 'constants/imageSizes'
import Text from 'components/common/ui/Text'
import Data from 'components/MediaOverview/Data'

const SeasonOverview = ({ 
	overview, 
	poster_path,
	air_date,
	episodes,
	name
}) => {
	return (
		<FlexBox>
			<Image
				url={poster_path}
				imageSize={POSTER_SIZES.MEDIUM}
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
						label='Aired'
						value={air_date}
					/>
					<Data
						label='Total Episodes'
						value={episodes?.length}
					/>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	)
}

SeasonOverview.propTypes = {
	overview: PropTypes.string,
	poster_path: PropTypes.string,
	episodes: PropTypes.array,
	air_date: PropTypes.string,
	name: PropTypes.string
}

export default SeasonOverview
