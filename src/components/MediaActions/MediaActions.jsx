import React from 'react'
import PropTypes from 'prop-types'
import FlexBox from 'components/common/ui/FlexBox'
import Action from 'components/common/Action'

import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import { 
	addToFavorite, 
	addToWatchlist, 
	removeFromFavorite, 
	removeFromWatchlist 
} from 'api/endpoints/account'
import RateMedia from 'components/RateMedia'
import AddToList from 'components/AddToList'

const MediaActions = ({
	mediaType,
	mediaId
}) => {
	const accountId = 'accountId'

	const mediaDetails = {
		media_type: mediaType,
		media_id: mediaId
	}

	const isFavorite = false
	const favoriteRequest = isFavorite ? removeFromFavorite : addToFavorite

	const isInWatchlist = false
	const watchlistRequest = isInWatchlist ? removeFromWatchlist : addToWatchlist

	return (
		<FlexBox>
			<RateMedia
				mediaType={mediaType}
				mediaId={mediaId}
			/>

			<Action
				mr={3}
				apiRequest={() => watchlistRequest(accountId, mediaDetails)}
				tooltip='Add to watchlist'
			>
				<BookmarkIcon/>
			</Action>

			<Action
				mr={3}
				tooltip='Add to favorites'
			>
				<HeartIcon/>
			</Action>

			<AddToList
				mediaType={mediaType}
				mediaId={mediaId}
			/>
		</FlexBox>
	)
}

MediaActions.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default MediaActions
