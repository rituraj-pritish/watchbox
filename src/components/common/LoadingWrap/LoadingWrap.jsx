import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper, LoaderWrapper, RootWrapper } from './LoadingWrap.styles'
import Loader from '../Loader'

const LoadingWrap = ({ children, isLoading }) => {
	return (
		<RootWrapper>
			{isLoading && (
				<LoaderWrapper>
					<Loader size={40}/>
				</LoaderWrapper>
			)}
			<ContentWrapper isLoading={isLoading}>
				{children}
			</ContentWrapper>
		</RootWrapper>
	)
}

LoadingWrap.propTypes = {
	children: PropTypes.node.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default LoadingWrap
