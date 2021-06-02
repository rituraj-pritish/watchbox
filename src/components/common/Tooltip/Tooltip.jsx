import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import useTheme from 'hooks/useTheme'
import getNewGuid from 'helpers/getNewGuid'

const Tooltip = ({
	tooltip,
	children,
	...rest
}) => {
	const { theme } = useTheme()

	if(!tooltip) return <>{children}</>
	const id = getNewGuid()
	return (
		<>
			{React.cloneElement(children, { 'data-tip': true, 'data-for': id })}
			<ReactTooltip
				id={id}
				effect='solid'
				textColor={theme.colors.textSecondary}
				backgroundColor={theme.colors.appBg}
				style={{ borderRadius: '50%' }}
				{...rest}
			>
				{tooltip}
			</ReactTooltip>
		</>
	)
}

Tooltip.propTypes = {
	children: PropTypes.node.isRequired,
	tooltip: PropTypes.any
}

export default Tooltip
