import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Skeleton from '../ui/Skeleton'
import FlexBox from '../ui/FlexBox'
import Text from '../ui/Text'
import Link from '../ui/Link'
import Modal from '../Modal'
import Avatar from '../Avatar'
import { Wrapper } from './Review.styles'
import useOverflow from 'hooks/useOverflow'

const Review = ({ fullView, ...review }) => {
	const { 
		id, 
		content, 
		created_at, 
		author_details 
	} = review
	const [contentRef, isOverflowingHeight] = useOverflow()

	if (!id) return (
		<Wrapper
			fullView={fullView}
			my={2}
		>
			<FlexBox
				alignItems='center'
				mb={3}
			>
				<Skeleton
					circle
					width={40}
					height={40}
				/>
				<Skeleton
					ml={3}
					width={150}
					height={20}
				/>
			</FlexBox>
			<Skeleton
				count={!fullView ? 3 : 6}
				my={1}
			/>
		</Wrapper>
	)

	return (
		<Wrapper
			fullView={fullView}
			my={2}
		>
			<FlexBox
				alignItems='center'
				py={3}
			>
				<Avatar
					{...author_details}
					size={40}
				/>
				<Text
					mx={3}
					bold
					size={2}
				>
					{author_details.name || author_details.username}
				</Text>
				<Text
					color='textTertiary'
					size={2}
				>
					{moment(created_at).format('DD MMM YYYY hh:mm A')}
				</Text>
			</FlexBox>
			<Text
				elRef={contentRef}
				color='textSecondary'
				maxLines={!fullView ? 5 : undefined}
			>
				{content}
			</Text>

			{!fullView && isOverflowingHeight && (
				<Modal
					trigger={
						<Link
							align='right'
							mt={2}
							size={1}
						>
              View full review
						</Link>
					}
					styles={{
						width: '50%',
						height: '50%',
						overflow: 'hidden',
						paddingTop: '0.5rem',
						paddingBottom: '1.5rem'
					}}
				>
					<Review
						fullView
						{...review}
					/>
				</Modal>
			)}
		</Wrapper>
	)
}

Review.propTypes = {
	fullView: PropTypes.bool
}

export default Review
