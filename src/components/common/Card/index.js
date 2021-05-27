import React from 'react'

import MediaCard from './MediaCard'
import PersonCard from './PersonCard'

const Card = props => {
	return 'profile_path' in props 
		? <PersonCard{...props}/>
		: <MediaCard {...props}/>
}

export default Card