import React from 'react'
import Card from './index'

export const media =  {
	'original_language': 'en',
	'original_title': 'Zack Snyder\'s Justice League',
	'poster_path': '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
	'video': false,
	'vote_average': 8.5,
	'id': 791373,
	'release_date': '2021-03-18',
	'vote_count': 5091,
	'title': 'Zack Snyder\'s Justice League',
	'adult': false,
	'backdrop_path': '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
	'overview': 'Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',
	'genre_ids': [
		28,
		12,
		14,
		878
	],
	'popularity': 2375.449,
	'media_type': 'movie'
}

export const cast = {
	'adult': false,
	'gender': 2,
	'id': 28846,
	'known_for_department': 'Acting',
	'name': 'Alexander Skarsgård',
	'original_name': 'Alexander Skarsgård',
	'popularity': 5.669,
	'profile_path': '/2y0wYdLE4MOmfxmOzfvSNPY3fGr.jpg',
	'cast_id': 213,
	'character': 'Dr. Nathan Lind',
	'credit_id': '60870ca984448e004124f8b5',
	'order': 0
}

export default { title: 'Card' }

export const defaultView = () => <Card {...media}/>

export const loadingView = () => <Card />

export const personView = () => (
	<Card
		person
		{...cast}
	/>
)