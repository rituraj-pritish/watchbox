import React, { useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg'
import useTheme from 'hooks/useTheme'
import { 
	Trigger,
	Header,
	Footer,
	Content
} from './Modal.styles'
import Icon from '../ui/Icon'

const Modal = ({
	children,
	trigger,
	onRequestClose,
	onOpen,
	onClose,
	header,
	footer,
	showCloseIcon = true,
	styles
}, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const { theme, isDarkMode } = useTheme()

	const closeModal = () => {
		setIsOpen(false)
		if(onRequestClose) onRequestClose()
	}

	useImperativeHandle(ref, () => ({
		close: closeModal
	}))

	const render = () => {
		if(!isOpen) return null

		return (
			<ReactModal
				isOpen={isOpen}
				onRequestClose={closeModal}
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
						display: 'flex',
						flexDirection: 'column',

						left: styles?.wrapper?.width ? '50%' : undefined,
						top: styles?.wrapper?.height ? '50%' : undefined,
						transform: `translate(${styles?.wrapper?.width ? '-50%' : '0'}, 
					${styles?.wrapper?.height ? '-50%' : '0'})`,
						...styles?.wrapper,
						overflow: footer ? 'hidden' : 'auto'
					}
				}}
			>
				{showCloseIcon && (
					<Icon 
						styles={{
							position: 'absolute',
							right: '0.7rem',
							top: '0.6rem',
							background: 'transparent'
						}}
						size={14}
						color='textTertiary'
						onClick={closeModal}
					>
						<CrossIcon/>
					</Icon>
				)}
				{!!header && <Header extendedStyles={styles?.header}>{header}</Header>}
				<Content extendedStyles={styles?.content}>{children}</Content>
				{!!footer && <Footer extendedStyles={styles?.footer}>{footer}</Footer>}
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
	header: PropTypes.node,
	footer: PropTypes.node,
	showCloseIcon: PropTypes.bool
}

export default React.forwardRef(Modal)
