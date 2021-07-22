import React from 'react'

import ToggleMenu from 'components/common/ToggleMenu'
import ListForm from '../ListForm'
import DeleteList from './DeleteList'

const ListToggleMenu = ({ list, menuRef }) => {
	return (
		<ToggleMenu ref={menuRef}>
			{/* <ListForm list={list}/> */}
			<DeleteList id={list?.id}/>
		</ToggleMenu>
	)
}

export default ListToggleMenu
