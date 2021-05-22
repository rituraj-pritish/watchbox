import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { StyledSkeleton } from './Skeleton.styles'

const Skeleton = ({ theme, className, ...props }) => {
	return (
		<StyledSkeleton
			className={className}
			color={theme.colors.skeleton.background}
			highlightColor={theme.colors.skeleton.highlightColor}
			{...props}
		/>
	)
}

Skeleton.propTypes = {
	className: PropTypes.string
}

export default withTheme(Skeleton)
