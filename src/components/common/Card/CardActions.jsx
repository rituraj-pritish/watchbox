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
		refetchFavorites, 
		toggleFavorite 
	} = useFavorites(mediaId,mediaType)
	const { 
		isInWatchlist, 
		refetchWatchlist, 
		toggleWatchlist 
	} = useWatchlist(mediaId,mediaType)

	return (
		<ActionWrapper
			isInWatchlist={isInWatchlist}
			isFavorite={isFavorite}
		>
			<StyledAction
				circle={false}
				mr={1}
				size={20}
				p={2}
				isVisible={isInWatchlist}
				tooltip={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
				color={isInWatchlist ? 'green' : undefined}
				apiRequest={toggleWatchlist}
				requestOptions={{
					onSuccess: refetchWatchlist
				}}
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
				apiRequest={toggleFavorite}
				requestOptions={{
					onSuccess: refetchFavorites
				}}
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
