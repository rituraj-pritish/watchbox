import React from 'react'
import UserBadge from './UserBadge'

export default { title: 'Navbar' }

const USER = {
	'avatar': {
		'gravatar': {
			'hash': 'f72e321825273e30b1bbf1058e50d874'
		},
		'tmdb': {
			'avatar_path': '/7L7xvLnK44vZFrNX2dmfWa9lXqo.jpg'
		}
	},
	'id': 10489792,
	'iso_639_1': 'en',
	'iso_3166_1': 'US',
	'name': '',
	'include_adult': false,
	'username': 'uniqueJohnDoe21'
}

export const navbar = () => <UserBadge user={USER}/>