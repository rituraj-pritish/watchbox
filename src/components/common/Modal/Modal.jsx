import React, { useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

import ReactModal from 'react-modal'
import useTheme from 'hooks/useTheme'
import { Trigger } from './Modal.styles'

const Modal = ({
	children,
	trigger,
	onRequestClose,
	onOpen,
	onClose,
	styles
}, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const { theme, isDarkMode } = useTheme()

	useImperativeHandle(ref, () => ({
		close: () => {
			setIsOpen(false)
			if(onRequestClose) onRequestClose()
		}
	}))

	const render = () => {
		if(!isOpen) return null

		return (
			<ReactModal
				isOpen={isOpen}
				onRequestClose={() => {
					setIsOpen(false)
					if(onRequestClose) onRequestClose()
				}}
				onAfterOpen={onOpen}
				onAfterClose={onClose}
				style={{
					overlay: {
						zIndex: 5,
						background: isDarkMode ? '#84848482' : '#82828259'
					},
					content: {
						padding: theme.spacing(),
						border: 'none',
						borderRadius: theme.borderRadius,
						background: theme.colors.appBg,
				
						left: styles?.width ? '50%' : undefined,
						top: styles?.height ? '50%' : undefined,
						transform: `translate(${styles?.width ? '-50%' : '0'}, 
					${styles?.height ? '-50%' : '0'})`,
						...styles,
					}
				}}
			>
				{children}
			</ReactModal>
		)
	}

	return (
		<div onClick={e => e.stopPropagation()}>
			<Trigger
				onClick={() => setIsOpen(true)}
			>
				{trigger}
			</Trigger>
			{render()}
		</div>
	)
}

Modal.propTypes = {
	trigger: PropTypes.node.isRequired,
	styles: PropTypes.object,
	children: PropTypes.node.isRequired,
	onRequestClose: PropTypes.func,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
}

export default React.forwardRef(Modal)
