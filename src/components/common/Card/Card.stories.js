import React from 'react'
import Card from './index'

const details =  {
	'video': false,
	'vote_average': 8.2,
	'overview': 'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung\'s best warrior, Sub-Zero, seeks out and trains with Earth\'s greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.',
	'release_date': '2021-04-07',
	'adult': false,
	'backdrop_path': '/3phkepIrEHnTNGE6ajEGdBfRxki.jpg',
	'vote_count': 546,
	'genre_ids': [
		14,
		28,
		12,
		878,
		53
	],
	'id': 460465,
	'original_language': 'en',
	'original_title': 'Mortal Kombat',
	'poster_path': '/6K0RCDfP9ExbTcYgryaQHTGmET7.jpg',
	'title': 'Mortal Kombat',
	'popularity': 3500.808,
	'media_type': 'movie'
}

export default { title: 'Card' }

export const defaultView = () => <Card {...details}/>