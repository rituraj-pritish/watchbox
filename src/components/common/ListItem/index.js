import React from 'react'
import BigListItem from './BigListItem'
import SmallListItem from './SmallListItem'

// eslint-disable-next-line react/prop-types
const ListItem = ({ small = false, ...rest }) => {
	return small ? <SmallListItem {...rest}/> : <BigListItem {...rest}/>
}

export default ListItem