import React from 'react'
import Toggle from './index'

export default { title: 'Toggle' }

export const toggle = () => {
	return (
		<Toggle
			options={[
				{ label: 'Option 1', value: '1' },
				{ label: 'Option 1', value: '3' },
				{ label: 'Option 1', value: '4' },
				{ label: 'Option 2', value: '2' }
			]}
		/>
	)
}