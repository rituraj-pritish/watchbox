import React from 'react'
import Modal from '.'
import Button from '../ui/Button'

export default  { title: 'Modal' }

export const modal = () => {

	return (
		<Modal
			trigger={<Button>Show modal</Button>}
			styles={{
				wrapper: {
					width: '50rem',
					height: '40rem'
				}
			}}
		>
				content
		</Modal>
	)
}