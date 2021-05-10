import React from 'react'
import Input from '.'
import FlexBox from '../FlexBox'

export default { title: 'Input' }

export const input = () => {
	return (
		<FlexBox flexDirection='column'>
			<Input
				label='Label'
				value='some text'
				placeholder='Enter some value'
				onChange={() => {}}
			/>
			<Input
				value='some text'
				placeholder='Enter some value'
				onChange={() => {}}
				mt={3}
			/>
		</FlexBox>
	)
}