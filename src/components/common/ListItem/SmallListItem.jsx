import React from 'react'
import PropTypes from 'prop-types'

import { RightSection, WrapperSmall } from './ListItem.styles'
import Text from '../ui/Text'
import moment from 'moment'
import Image from '../ui/Image'
import { POSTER_SIZES } from 'constants/imageSizes'
import Link from '../ui/Link'
import Skeleton from '../ui/Skeleton'

const DATE_FORMAT = 'DD MMM YYYY'

const SmallListItem = ({
	poster_path,
	title,
	release_date,
	overview,
	id,
	media_type,
	includeType = true
}) => {
	if (!id)
		return (
			<WrapperSmall>
				<Skeleton
					width={100}
					height='100%'
				/>
				<RightSection>
					<Skeleton
						width='35%'
						height={20}
						mb={3}
					/>
					<Skeleton
						width='100%'
						height={16}
						mb={1}
					/>
					<Skeleton
						width='100%'
						height={16}
					/>
				</RightSection>
			</WrapperSmall>
		)

	return (
		<Link to={`/${media_type}/${id}`}>
			<WrapperSmall>
				<Image
					url={poster_path}
					width={100}
					imageSize={POSTER_SIZES.SMALL}
				/>
				<RightSection>
					<Text
						bold
						color='primary'
						mb={2}
						size={3}
					>
						{title}
					</Text>
					{includeType && (
						<Text
							italic
							capitalize
							mb={2}
							color='secondary'
						>
							{media_type}
						</Text>
					)}
					<Text
						color='textTertiary'
						size={1}
					>
						{moment(release_date).format(DATE_FORMAT)}
					</Text>
					<Text
						mt={3}
						maxLines={2}
					>
						{overview}
					</Text>
				</RightSection>
			</WrapperSmall>
		</Link>
	)
}

SmallListItem.propTypes = {
	poster_path: PropTypes.string,
	title: PropTypes.string,
	release_date: PropTypes.string,
	overview: PropTypes.string,
	id: PropTypes.number,
	media_type: PropTypes.string,
	includeType: PropTypes.bool,
}

export default SmallListItem
