import React from 'react'
import { withTheme } from 'styled-components'

import { StyledSkeleton } from './Skeleton.styles'

const Skeleton = ({ theme, ...props }) => {
	return (
		<StyledSkeleton
			color={theme.colors.skeleton.background}
			highlightColor={theme.colors.skeleton.highlightColor}
			{...props}
		/>
	)
}

Skeleton.propTypes = {}

export default withTheme(Skeleton)
