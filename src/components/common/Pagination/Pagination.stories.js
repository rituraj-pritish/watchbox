import React from 'react'
import Pagination from '.'

export default { title: 'Pagination' }

export const pagination = () => (
	<>
		<Pagination
			initialPage={2}
			totalPages={15}
		/>
	</>
)