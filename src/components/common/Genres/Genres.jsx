import React from 'react'
import PropTypes from 'prop-types'
import { useState } from '@hookstate/core'

import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import { GENRE_LIST } from 'components/GlobalState'

const Genres = ({ ids, vertical = false }) => {
	const genreById = useState(GENRE_LIST).get()
	const genres = ids?.map((id) => genreById[id])

	return (
		<FlexBox 
			flexDirection={vertical ? 'column' : 'row'}
		>
			{genres?.map(genre => (
				<Link
					to='/'
					key={genre}
					mb={vertical ? 2 : undefined}
					mr={!vertical ? 3 : undefined}
					textAlign={vertical ? 'center' : undefined}
				>
					{genre}
				</Link>
			))}
		</FlexBox>
	)
}

Genres.propTypes = { 
	ids: PropTypes.arrayOf(PropTypes.number),
	vertical: PropTypes.bool
}

export default Genres
