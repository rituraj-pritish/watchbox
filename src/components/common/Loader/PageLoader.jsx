import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'
import { Wrapper } from './Loader.styles'
import Text from '../ui/Text'

const PageLoader = ({ text }) => {
	return (
		<Wrapper>
			<Loader size={40}/>
			<Text 
				mt={2}
				color='textTertiary'
			>
				{text}
			</Text>
		</Wrapper>
	)
}

PageLoader.propTypes = {
	text: PropTypes.string,
}

export default PageLoader
