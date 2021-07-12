import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'

import { ReactComponent as StarIcon } from 'assets/icons/star.svg'
import Icon from 'components/common/ui/Icon'
import Dialog from 'components/Dialog'
import Button from 'components/common/ui/Button'
import { BUTTON_VARIANTS } from 'constants/buttons'
import Action from 'components/common/Action'
import useAuthentication from 'hooks/useAuthentication'
import useRating from 'hooks/useRating'
import FlexBox from 'components/common/ui/FlexBox'
import Text from 'components/common/ui/Text'

const ICON_SIZE = 45

const RateMedia = ({
	mediaType,
	mediaId,
	name
}) => {
	const { rating: initialRating, deleteRating, rate } = useRating(mediaId, mediaType)
	const [rating, setRating] = useState()
	const { isAuthenticated } = useAuthentication()

	const tooltip = initialRating
		?	(
			<>
				Remove Rating 
				<FlexBox
					alignItems='center'
					mt={1}
				>
					<Text fontWeight={400}>
						{`Rated - ${initialRating}`}
					</Text>
					<Icon
						ml={1}
						mt='-2px'
					>
						<StarIcon/>
					</Icon>
				</FlexBox>
			</>
		)
		:	`Rate ${mediaType}`

	return (
		<Dialog
			trigger={(
				<Action
					tooltip={tooltip}
					enablePropagation={isAuthenticated}
					mr={3}
				>
					<StarIcon/>
				</Action>
			)}
			title={`Rate ${name}`}
			disabled={!rating || initialRating}
			confirmText={`Rate ${rating ? rating : ''}`}
			onConfirm={() => rate(rating)}
			extraButtons={(
				<Button 
					variant={BUTTON_VARIANTS.DANGER}
					disabled={!initialRating}
					onClick={deleteRating}
				>
					Remove Rating
				</Button>
			)}
			onCancel={() => setRating(null)}
		>
			<FlexBox justifyContent='center'>
				<Rating
					initialRating={initialRating || rating}
					readonly={initialRating}
					emptySymbol={(
						<Icon
							size={ICON_SIZE}
							color='grey'
						>
							<StarIcon/>
						</Icon>
					)}
					fullSymbol={(
						<Icon
							size={ICON_SIZE}
						>
							<StarIcon/>
						</Icon>
					)}
					fractions={2}
					onChange={setRating}
				/>
			</FlexBox>
		</Dialog>
	)
}

RateMedia.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
}

export default React.memo(RateMedia)
