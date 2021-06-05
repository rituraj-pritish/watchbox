import React from 'react'

import useTheme from 'hooks/useTheme'
import MediaCard from './MediaCard'
import PersonCard from './PersonCard'
import  SimpleCard from './Card'
import { SkeletonWrapper, Wrapper } from './Card.styles'
import Skeleton from '../ui/Skeleton'

const Card = props => {
	const { isDarkMode } = useTheme()
	
	if(!props.id) {
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
	}

	if('image_path' in props || 'subTitle' in props) {
		return <SimpleCard {...props}/>
	} else if ('profile_path' in props) {
		return <PersonCard{...props}/>
	} else {
		return <MediaCard {...props}/>
	}
}

export default Card