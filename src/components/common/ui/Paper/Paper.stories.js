import React from 'react'
import Link from '../Link'
import Text from '../Text'
import Paper from './index'

export default { title: 'Paper' }

export const paper = () => {
	return (
		<Paper>
			<Link >
        Title
			</Link>
			<Text
				mt={1}
				size={3}
				color='primary.main'
			>Title
			</Text>
		</Paper>
	)
}