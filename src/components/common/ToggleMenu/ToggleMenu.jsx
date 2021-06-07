import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Trigger, Wrapper } from './ToggleMenu.styles'
import useComponentVisible from 'hooks/useComponentVisible'

const ToggleMenu = ({
	trigger,
	children
}) => {
	const [ref, showMenu, setShowMenu] = useComponentVisible(false)

	return (
		<Wrapper>
			<Trigger
				onClick={() => setShowMenu(true)}
			>{trigger || 'trigger'}
			</Trigger>
			{showMenu && (
				<Menu
					ref={ref}
					onClick={() => setShowMenu(false)}
				>
					{children}
				</Menu>
			)}
		</Wrapper>
	)
}

ToggleMenu.propTypes = {
	trigger: PropTypes.node,
	children: PropTypes.node.isRequired,
}

export default ToggleMenu
