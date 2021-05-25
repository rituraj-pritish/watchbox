import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { StyledSkeleton } from './Skeleton.styles'
import useTheme from 'hooks/useTheme'

const Skeleton = ({ className, ...props }) => {
	const { theme } = useTheme()

	return (
		<StyledSkeleton
			className={className}
			color={theme.colors.skeleton}
			highlightColor={theme.colors.skeletonHighlight}
			{...props}
		/>
	)
}

Skeleton.propTypes = {
	className: PropTypes.string,
	theme: PropTypes.object.isRequired
}

export default withTheme(Skeleton)
