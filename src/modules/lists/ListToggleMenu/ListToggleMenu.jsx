import React from 'react'

import ToggleMenu from 'components/common/ToggleMenu'
import ListForm from '../ListForm'
import DeleteList from './DeleteList'

const ListToggleMenu = ({ id }) => {
	return (
		<ToggleMenu>
			<ListForm isEditing/>
			<DeleteList id={id}/>
		</ToggleMenu>
	)
}

export default ListToggleMenu
