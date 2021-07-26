import React from 'react'
import toast from 'react-hot-toast'
import Button from '../ui/Button'

export default { title: 'Toast' }

const onClick = () => {
	toast('abcd')
}

export const defaultView = () => (
	<Button onClick={onClick}>
    Show Toast
	</Button>
)