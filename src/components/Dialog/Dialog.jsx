import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Modal from 'components/common/Modal'
import Text from 'components/common/ui/Text'
import FlexBox from 'components/common/ui/FlexBox'
import Button from 'components/common/ui/Button'
import { BUTTON_VARIANTS } from 'constants/buttons'

const Dialog = ({
	trigger,
	title,
	onConfirm,
	children
}) => {
	const modalRef = useRef()

	return (
		<Modal
			ref={modalRef}
			trigger={trigger}
			styles={{
				height: 'fit-content',
				width: '40rem'
			}}
		>
			<Text
				bold
				align='center'
				size={3}
				mb={3}
			>
				{title}
			</Text>

			{children}

			<FlexBox
				justifyContent='flex-end'
				mt={3}
			>
				<Button 
					variant={BUTTON_VARIANTS.CANCEL}
					mr={3}
					onClick={modalRef?.current?.close}
				>
          Cancel
				</Button>
				<Button>Confirm</Button>
			</FlexBox>
		</Modal>
	)
}

Dialog.propTypes = {
	trigger: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
}

export default Dialog
