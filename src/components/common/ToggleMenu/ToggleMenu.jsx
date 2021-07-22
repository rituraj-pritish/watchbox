import React, { useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as EllipsisIcon } from 'assets/icons/ellipsis.svg'
import { Menu, Trigger, Wrapper } from './ToggleMenu.styles'
import useComponentVisible from 'hooks/useComponentVisible'
import Icon from '../ui/Icon'

const ToggleMenu = ({
	trigger,
	children
}, ref) => {
	const [menuRef, showMenu, setShowMenu] = useComponentVisible(false)

	useImperativeHandle(ref, () => ({
		close: () => {
			setShowMenu(false)
		}
	}))

	return (
		<Wrapper>
			<Trigger
				onClick={() => setShowMenu(true)}
			>{trigger || (
					<Icon onClick={() => setShowMenu(true)}>
						<EllipsisIcon/>
					</Icon>
				)}
			</Trigger>
			<Menu
				isVisible={showMenu}
				ref={menuRef}
				onClick={() => setShowMenu(false)}
			>
				{children}
			</Menu>
		</Wrapper>
	)
}

ToggleMenu.propTypes = {
	trigger: PropTypes.node,
	children: PropTypes.node.isRequired,
}

export default React.forwardRef(ToggleMenu)
