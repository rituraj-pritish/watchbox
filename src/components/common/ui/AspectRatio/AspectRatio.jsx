import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './AspectRatio.styles'

const AspectRatio = ({ ratio, children }) => {
	return (
		<Wrapper ratio={ratio}>
			{children}
		</Wrapper>
	)
}

AspectRatio.propTypes = {
	ratio: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
}

export default AspectRatio
