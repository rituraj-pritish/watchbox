import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from 'components/common/ui/FlexBox'
import Image from 'components/common/ui/Image'
import { POSTER_SIZES } from 'constants/imageSizes'
import Text from 'components/common/ui/Text'
import Skeleton from 'components/common/ui/Skeleton'
import Data from 'components/MediaOverview/Data'
import Male from 'assets/images/default-male.jpeg'
import Female from 'assets/images/default-female.png'
import GENDER from 'constants/gender'

const PersonOverview = ({
	profile_path,
	name,
	biography,
	id,
	birthday,
	known_for_department,
	gender
}) => {
	if(!id) return (
		<FlexBox>
			<Skeleton
				height={400}
				width={300}
				mr={3}
			/>
			<FlexBox
				flexDirection='column'
				flexGrow='1'
			>
				<Skeleton
					width={200}
					height={25}
				/>
				<Skeleton
					width='100%'
					count={5}
					mt={2}
				/>
			</FlexBox>
		</FlexBox>
	)

	return (
		<FlexBox>
			<Image
				url={profile_path}
				imageSize={POSTER_SIZES.MEDIUM}
				fallback={GENDER[gender] === 'male' ? Male : Female}
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
					{biography}
				</Text>
				<FlexBox mt={3}>
					<Data
						label='Born'
						value={birthday}
					/>
					<Data
						label='Known For'
						value={known_for_department}
					/>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	)
}

PersonOverview.propTypes = {
	profile_path: PropTypes.string,
	name: PropTypes.string,
	biography: PropTypes.string,
	id: PropTypes.number,
	birthday: PropTypes.string,
	known_for_department: PropTypes.string,
	gender: PropTypes.number,
}

export default PersonOverview
