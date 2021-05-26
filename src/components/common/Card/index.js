import React from 'react'

import MediaCard from './MediaCard'
import PersonCard from './PersonCard'

const Card = props => {
	return props.person 
		? <PersonCard{...props}/>
		: <MediaCard {...props}/>
}

export default Card