import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../ui/Icon'
import Tooltip from '../Tooltip'
import Text from '../ui/Text'
import useAuthentication from 'hooks/useAuthentication'
import Loader from '../Loader'

const Action = ({
	children,
	tooltip,
	isLoading,
	onClick,
	...rest
}) => {
	const { isAuthenticated } = useAuthentication()

	const tooltipEl = (
		<>
			<Text
				bold
				mb={1}
			>
				{tooltip}
			</Text>
			{!isAuthenticated && (
				<Text size={1}>
				Login required !
				</Text>
			)}
		</>
	)

	const handleClick = () => {
		if(!isAuthenticated || isLoading) return 
		if(onClick) onClick()
	}

	return (
		<Tooltip tooltip={tooltipEl}>
			<Icon
				onClick={handleClick}
				size={20}
				circle
				p={12}
				data-testid='action'
				{...rest}
			>
				{!isLoading ? children : <Loader size={20}/>}
			</Icon>
		</Tooltip>
	)
}

Action.propTypes = {
	children: PropTypes.node.isRequired,
	apiRequest: PropTypes.func.isRequired,
	tooltip: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default Action
