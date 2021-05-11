import React from 'react'
import Dropdown from './index'

export default { title: 'Dropdown' }

export const dropdown = () => {
	return (
		<Dropdown
			value={1}
			label='Dropdown'
			options={[
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 }
			]}
			onChange={() => {}}
		/>
	)
}