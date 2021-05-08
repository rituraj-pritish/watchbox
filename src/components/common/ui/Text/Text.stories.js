import React from 'react'
import Text from './index'

export default { title: 'Text' }

export const text = () => {
	return (
		<Text
			color='primary.main'
			italic
			fontSize={3}
		>Some random text
		</Text>
	)
}