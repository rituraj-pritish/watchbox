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
	confirmText,
	children,
	extraButtons,
	disabled,
	onCancel,
	isLoading
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
			onRequestClose={onCancel}
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
				{extraButtons}
				<Button 
					disabled={disabled}
					onClick={onConfirm}
					isLoading={isLoading}
					ml={extraButtons ? 3 : undefined}
				>
					{confirmText || 'Confirm'}
				</Button>
			</FlexBox>
		</Modal>
	)
}

Dialog.propTypes = {
	trigger: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	onConfirm: PropTypes.func.isRequired,
	confirmText: PropTypes.string,
	children: PropTypes.node.isRequired,
	extraButtons: PropTypes.node,
	disabled: PropTypes.bool,
}

export default Dialog
