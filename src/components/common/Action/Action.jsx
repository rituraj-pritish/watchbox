import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../ui/Icon'
import { useMutation } from 'react-query'

const Action = ({
	children,
	apiRequest,
	requestOptions,
	tooltip,
	onClick,
	...rest
}) => {
	const { mutate } = useMutation(apiRequest, requestOptions)

	return (
		<Icon
			onClick={mutate}
			circle
			size={20}
			p={12}
			{...rest}
		>
			{children}
		</Icon>
	)
}

Action.propTypes = {
	children: PropTypes.node.isRequired,
	apiRequest: PropTypes.func.isRequired,
	tooltip: PropTypes.string
}

export default Action
