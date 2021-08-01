import React, { useEffect, useImperativeHandle, useState } from 'react'
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

const MAX_PERCENTAGE = 85 / 100

const Modal = ({
	children,
	trigger,
	onRequestClose,
	onOpen,
	onClose,
	header,
	footer,
	showCloseIcon = true,
	styles,
	aspectRatio
}, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalDimensions, setModalDimensions] = useState({})
	const { theme, isDarkMode } = useTheme()

	const closeModal = () => {
		setIsOpen(false)
		if(onRequestClose) onRequestClose()
	}

	useImperativeHandle(ref, () => ({
		close: closeModal
	}))

	const setDimensions = () => {
		if(!isOpen) return 

		const screenHeight = window.innerHeight
		const screenWidth = window.innerWidth

		let h
		let w

		if(screenHeight > screenWidth) {
			const ph = screenHeight * MAX_PERCENTAGE
			const pw = aspectRatio * ph

			if(pw > screenWidth * 85 /100) {
				w = screenWidth * MAX_PERCENTAGE
				h = w / aspectRatio
			} else {
				h = ph
				w = pw
			}
		} else {
			const pw = screenWidth * MAX_PERCENTAGE
			const ph = pw / aspectRatio

			if(ph > screenHeight * 85 /100) {
				h = screenHeight * MAX_PERCENTAGE
				w = h * aspectRatio
			} else {
				h = ph
				w = pw
			}
		}

		setModalDimensions({
			height: h + 'px',
			width: w + 'px'
		})
	}

	useEffect(() => {
		if(!aspectRatio || !isOpen) return
		setDimensions()

		window.addEventListener('resize', setDimensions)

		return () => {
			setModalDimensions({})
			window.removeEventListener('resize', setDimensions)
		}
	}, [isOpen])

	const contentStyles = (styles?.wrapper?.width && styles?.wrapper?.height) || modalDimensions
		?	{
			left: '50%',
			top:  '50%',
			transform: 'translate(-50%, -50%)',
		}
		: {}

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
						zIndex: 15,
						background: isDarkMode ? '#84848482' : '#82828259'
					},
					content: {
						padding: theme.spacing(),
						border: 'none',
						borderRadius: theme.borderRadius,
						background: theme.colors.appBg,
						display: 'flex',
						flexDirection: 'column',
						...styles?.wrapper,
						...contentStyles,
						overflow: footer ? 'hidden' : 'auto',
						...modalDimensions
					},
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
				{!!header && (
					<Header
						showCloseIcon={showCloseIcon}
						extendedStyles={styles?.header}
					>
						{header}
					</Header>)}
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
