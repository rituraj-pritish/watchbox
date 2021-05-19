import React from 'react'
import FlexBox from '../ui/FlexBox'

import ListItem from './index'

export default  { title: 'List Item' }

const DETAILS =  {
	adult: false,
	backdrop_path: '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
	genre_ids: [28, 53, 80],
	id: 634528,
	original_language: 'en',
	original_title: 'The Marksman',
	overview:
		'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
	poster_path: '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
	release_date: '2021-01-15',
	title: 'The Marksman',
	video: false,
	vote_average: 7.1,
	vote_count: 157,
	popularity: 2579.794,
	media_type: 'movie'
}

export const defaultView = () => (
	<>
		<ListItem {...DETAILS}/>
		<ListItem />
	</>
)

export const smallView = () => (
	<>
		<ListItem
			includeType
			small
			{...DETAILS}
		/>
		<FlexBox my={2}/>
		<ListItem small />
	</>
)