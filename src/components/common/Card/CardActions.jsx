import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import useWatchlist from 'hooks/useWatchlist'
import useFavorites from 'hooks/useFavorites'
import { ActionWrapper, StyledAction } from './Card.styles'

const CardActions = ({ mediaId, mediaType }) => {
	const { 
		isFavorite, 
		toggleFavorite,
		isLoading: isFavoriteLoading
	} = useFavorites(mediaId,mediaType)
	const { 
		isInWatchlist, 
		toggleWatchlist,
		isLoading: isWatchlistLoading
	} = useWatchlist(mediaId,mediaType)

	return (
		<ActionWrapper
			isInWatchlist={isInWatchlist}
			isFavorite={isFavorite}
		>
			<StyledAction
				circle={false}
				mr={2}
				size={20}
				p={2}
				isVisible={isInWatchlist}
				tooltip={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
				color={isInWatchlist ? 'green' : undefined}
				onClick={toggleWatchlist}
				isLoading={isWatchlistLoading}
			>
				<BookmarkIcon />
			</StyledAction>

			<StyledAction
				circle={false}
				size={20}
				p={2}
				isVisible={isFavorite}
				tooltip={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				color={isFavorite ? 'danger' : undefined}
				onClick={toggleFavorite}
				isLoading={isFavoriteLoading}
			>
				<HeartIcon />
			</StyledAction>
		</ActionWrapper>
	)
}

CardActions.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default CardActions
