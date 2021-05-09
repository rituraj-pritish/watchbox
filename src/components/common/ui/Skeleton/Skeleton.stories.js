import React from 'react'
import Link from '../Link'
import Text from '../Text'
import Paper from '../Paper'
import Skeleton from './index'

export default { title: 'Skeleton' }

export const skeleton = () => {
	return (
		<Paper>
			<Skeleton/>
			<Link >
        Link
			</Link>
			<Text
				mt={1}
				size={4}
				color='primary'
			>Title
			</Text>
		</Paper>
	)
}