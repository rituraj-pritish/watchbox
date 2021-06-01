import React from 'react'
import Dropdown from './index'

export default { title: 'Dropdown' }

export const dropdown = () => {
	return (
		<Dropdown
			value={3}
			label='Dropdown'
			options={[
				{ label: 'Option 1', value: 1 },
				{ label: '3', value: 3 },
				{ label: 'Option 2', value: 2 }
			]}
			onChange={() => {}}
		/>
	)
}