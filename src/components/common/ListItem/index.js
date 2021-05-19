import React from 'react'
import BigListItem from './BigListItem'
import SmallListItem from './SmallListItem'

const ListItem = ({ small = false, ...rest }) => {
	return small ? <SmallListItem {...rest}/> : <BigListItem {...rest}/>
}

export default ListItem