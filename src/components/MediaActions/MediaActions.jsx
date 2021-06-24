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
	mediaId
}) => {
	const { 
		isFavorite, 
		refetchFavorites,
		toggleFavorite
	} = useFavorites(mediaId, mediaType)
	const { 
		isInWatchlist, 
		refetchWatchlist,
		toggleWatchlist
	} = useWatchlist(mediaId, mediaType)

	return (
		<FlexBox>
			{/* <RateMedia
				mediaType={mediaType}
				mediaId={mediaId}
			/> */}

			<Action
				mr={3}
				tooltip={isInWatchlist ? 'Remove from watchlist' :'Add to watchlist'}
				color={isInWatchlist ? 'green' : undefined}
				apiRequest={toggleWatchlist}
				requestOptions={{
					onSuccess: refetchWatchlist
				}}
			>
				<BookmarkIcon/>
			</Action>

			<Action
				mr={3}
				tooltip={isFavorite ? 'Remove from favorites' :'Add to favorites'}
				color={isFavorite ? 'danger' : undefined}
				apiRequest={toggleFavorite}
				requestOptions={{
					onSuccess: refetchFavorites
				}}
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
	mediaId: PropTypes.number.isRequired
}

export default MediaActions
