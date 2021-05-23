import React from 'react'
import PropTypes from 'prop-types'
import FlexBox from 'components/common/ui/FlexBox'
import Action from 'components/common/Action'

import { ReactComponent as StarIcon } from 'assets/icons/star.svg'
import { ReactComponent as BookmarkIcon } from 'assets/icons/bookmark.svg'
import { ReactComponent as ListIcon } from 'assets/icons/list-dotted.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import { 
	addToFavorite, 
	addToWatchlist, 
	removeFromFavorite, 
	removeFromWatchlist 
} from 'api/endpoints/account'

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
			<Action
				mr={3}
				apiRequest={() => favoriteRequest(accountId, mediaDetails)}
			>
				<StarIcon/>
			</Action>

			<Action
				mr={3}
				apiRequest={() => watchlistRequest(accountId, mediaDetails)}
			>
				<BookmarkIcon/>
			</Action>

			<Action
				mr={3}
			>
				<HeartIcon/>
			</Action>

			<Action
				mr={3}
			>
				<ListIcon/>
			</Action>
		</FlexBox>
	)
}

MediaActions.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default MediaActions
