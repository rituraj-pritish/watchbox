import React from 'react'
import PropTypes from 'prop-types'
import { StyledPaper } from './Paper.styles'

const Paper = ({
	children,
	...rest
}) => {
	return (
		<StyledPaper {...rest}>
			{children}
		</StyledPaper>
	)
}

Paper.propTypes = {
	children: PropTypes.node.isRequired
}

export default Paper
