import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'

import Modal from 'components/common/Modal'
import Action from 'components/common/Action'
import { ReactComponent as StarIcon } from 'assets/icons/star.svg'
import Icon from 'components/common/ui/Icon'
import useTheme from 'hooks/useTheme'
import Button from 'components/common/ui/Button'

const RateMedia = ({
	mediaType,
	mediaId
}) => {
	const { isDarkMode } = useTheme()

	return (
		<Modal
			trigger={(
				<Icon
					circle
					p={12}
					size={20}
					onClick={() => {}}
					enablePropagation
					mr={3}
				>
					<StarIcon/>
				</Icon>
			)}
			styles={{
				width: '20rem',
				height: '7rem'
			}}
		>
			<Rating
				emptySymbol={(
					<Icon
						size={20}
						color='grey'
					>
						<StarIcon/>
					</Icon>
				)}
				fullSymbol={(
					<Icon
						size={20}
					>
						<StarIcon/>
					</Icon>
				)}
				fractions={2}
			/>
			<Button>
				Save
			</Button>
		</Modal>
	)
}

RateMedia.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default RateMedia
