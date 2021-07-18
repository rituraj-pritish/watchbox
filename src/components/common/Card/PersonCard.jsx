import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import { Wrapper } from './Card.styles'
import Image from '../ui/Image'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Male from 'assets/images/default-male.jpeg'
import Female from 'assets/images/default-female.png'
import GENDER from 'constants/gender'

const PersonCard = ({ 
	id, 
	profile_path, 
	name, 
	character,
	job,
	gender
}) => {
	const history = useHistory()

	return (
		<Wrapper
			onClick={() => history.push(`/person/${id}`)}
			data-testid={id}
		>
			<Image
				url={profile_path}
				fallback={GENDER[gender] === 'male' ? Male : Female}
				flexGrow={1}
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
					italic
					size={1}
					maxLines={1}
				> 
					{character ? `as ${character}` : job}
				</Text>
			</FlexBox>
		</Wrapper>
	)
}

PersonCard.propTypes = {
	id: PropTypes.number,
	profile_path: PropTypes.string,
	name: PropTypes.string,
	character: PropTypes.string,
	job: PropTypes.string,
	gender: PropTypes.number,
}

export default PersonCard
