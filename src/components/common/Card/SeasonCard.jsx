import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import useTheme from 'hooks/useTheme'
import { Wrapper } from './Card.styles'
import Image from '../ui/Image'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'

const SeasonCard = ({
	id,
	poster_path,
	episode_count,
	name
}) => {
	const history = useHistory()
	const { isDarkMode } = useTheme()
	return (
		<Wrapper
			isDarkMode={isDarkMode}
			onClick={() => history.push(`/tv/${id}/seasons/${id}`)}
			data-testid={id}
		>
			<Image
				url={poster_path}
			/>
			<FlexBox
				height={40}
				mt={2}
				flexDirection='column'
			>
				<Text
					bold
					maxLines={1}
				>
					{name}
				</Text>
				<Text
					size={1}
					maxLines={1}
				> 
					{episode_count} Episodes
				</Text>
			</FlexBox>
		</Wrapper>
	)
}

SeasonCard.propTypes = {
	id: PropTypes.number.isRequired,
	poster_path: PropTypes.string,
	episode_count: PropTypes.number,
	name: PropTypes.string.isRequired
}

export default SeasonCard
