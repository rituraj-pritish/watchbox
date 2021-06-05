import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import useTheme from 'hooks/useTheme'
import { Wrapper } from './Card.styles'
import Image from '../ui/Image'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'

const Card = ({
	title,
	subTitle,
	image_path,
	link,
	imageSize
}) => {
	const history = useHistory()
	const { isDarkMode } = useTheme()
	return (
		<Wrapper
			isDarkMode={isDarkMode}
			onClick={() => history.push(link)}
		>
			<Image
				url={image_path}
				imageSize={imageSize}
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
					{title}
				</Text>
				<Text
					size={1}
					maxLines={1}
				> 
					{subTitle}
				</Text>
			</FlexBox>
		</Wrapper>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	image_path: PropTypes.string,
	link: PropTypes.string,
	imageSize: PropTypes.number
}

export default Card
