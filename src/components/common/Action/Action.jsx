import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../ui/Icon'
import { useMutation } from 'react-query'
import Tooltip from '../Tooltip'
import Text from '../ui/Text'
import useAuthentication from 'hooks/useAuthentication'

const Action = ({
	children,
	apiRequest,
	requestOptions,
	tooltip,
	onClick,
	...rest
}) => {
	const { mutate } = useMutation(apiRequest, requestOptions)
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

	return (
		<Tooltip tooltip={tooltipEl}>
			<Icon
				onClick={isAuthenticated ? mutate : null}
				circle
				size={20}
				p={12}
				{...rest}
			>
				{children}
			</Icon>
		</Tooltip>
	)
}

Action.propTypes = {
	children: PropTypes.node.isRequired,
	apiRequest: PropTypes.func.isRequired,
	tooltip: PropTypes.string
}

export default Action
