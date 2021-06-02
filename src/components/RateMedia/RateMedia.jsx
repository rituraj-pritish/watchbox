import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'components/common/Modal'
import Action from 'components/common/Action'
import { ReactComponent as StarIcon } from 'assets/icons/star.svg'

const RateMedia = ({
	mediaType,
	mediaId
}) => {
	return (
		<Modal
			trigger={(
				<Action
					mr={3}
					tooltip={`Rate ${mediaType}`}
				>
					<StarIcon/>
				</Action>
			)}
		/>
	)
}

RateMedia.propTypes = {
  
}

export default RateMedia
