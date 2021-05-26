import React from 'react'
import PropTypes from 'prop-types'

import { SkeletonWrapper, Wrapper } from './Card.styles'
import useTheme from 'hooks/useTheme'
import Skeleton from '../ui/Skeleton'
import Image from '../ui/Image'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'

const PersonCard = ({ id, profile_path, name, character }) => {
	const { isDarkMode } = useTheme()

	if (!id)
		return (
			<Wrapper isDarkMode={isDarkMode}>
				<SkeletonWrapper>
					<Skeleton
						height='100%'
						mb={2}
					/>
					<Skeleton height={16} />
				</SkeletonWrapper>
			</Wrapper>
		)

	return (
		<Wrapper isDarkMode={isDarkMode}>
			<Image url={profile_path} />
			<FlexBox
				height={40}
				mt={2}
				flexDirection='column'
			>
				<Text bold>{name}</Text>
				<Text
					italic
					size={1}
				> 
          as {character}
				</Text>
			</FlexBox>
		</Wrapper>
	)
}

PersonCard.propTypes = {
	id: PropTypes.number
}

export default PersonCard
