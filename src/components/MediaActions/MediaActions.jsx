import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import useFavorites from 'hooks/useFavorites'
import useWatchlist from 'hooks/useWatchlist'
import FlexBox from 'components/common/ui/FlexBox'
import Action from 'components/common/Action'
import RateMedia from 'components/RateMedia'
import AddToList from 'components/AddToList'

const MediaActions = ({
	mediaType,
	mediaId,
	name
}) => {
	const { 
		isFavorite, 
		toggleFavorite,
		isLoading: isFavoriteLoading
	} = useFavorites(mediaId, mediaType)
	const { 
		isInWatchlist, 
		toggleWatchlist,
		isLoading: isWatchlistLoading
	} = useWatchlist(mediaId, mediaType)

	return (
		<FlexBox>
			<RateMedia
				mediaType={mediaType}
				mediaId={mediaId}
				name={name}
			/>

			<Action
				mr={3}
				tooltip={isInWatchlist ? 'Remove from watchlist' :'Add to watchlist'}
				color={isInWatchlist ? 'green' : undefined}
				onClick={toggleWatchlist}
				isLoading={isWatchlistLoading}
			>
				<BookmarkIcon/>
			</Action>

			<Action
				mr={3}
				tooltip={isFavorite ? 'Remove from favorites' :'Add to favorites'}
				color={isFavorite ? 'danger' : undefined}
				onClick={toggleFavorite}
				isLoading={isFavoriteLoading}
			>
				<HeartIcon/>
			</Action>

			{/* <AddToList
				mediaType={mediaType}
				mediaId={mediaId}
			/> */}
		</FlexBox>
	)
}

MediaActions.propTypes = {
	mediaType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default React.memo(MediaActions)
