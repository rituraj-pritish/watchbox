import React from 'react'
import Dialog from '.'

export default { title: 'Dialog' }

export const defaultView = () => (
	<Dialog 
		title='Default Dialog'
		trigger={<div>Trigger</div>}
	>
    Content
	</Dialog>
)