import React from 'react'
import PropTypes from 'prop-types'

import Action from 'components/common/Action'
import { ReactComponent as ListIcon } from 'assets/icons/list-dotted.svg'
import Modal from 'components/common/Modal'

const AddToList = ({
	mediaType,
	mediaId
}) => {
	return (
		<Modal
			trigger={(
				<Action
					mr={3}
					tooltip={`Add ${mediaType} to list`}
				>
					<ListIcon/>
				</Action>
			)}
		/>
	)
}

AddToList.propTypes = {

}

export default AddToList
