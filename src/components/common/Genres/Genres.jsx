import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import useGenres from 'hooks/useGenres'

const Genres = ({ mediaType, ids, vertical = false }) => {
	const { genres: genreById } = useGenres()
	const genres = ids?.map((id) => [id, genreById[id]])

	return (
		<FlexBox 
			flexDirection={vertical ? 'column' : 'row'}
		>
			{genres?.map(([id, genre]) => (
				<Link
					to={`/discover/${mediaType}?genreId=${id}`}
					onClick={e => e.stopPropagation()}
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
	mediaType: PropTypes.string.isRequired,
	ids: PropTypes.arrayOf(PropTypes.number),
	vertical: PropTypes.bool
}

export default Genres
