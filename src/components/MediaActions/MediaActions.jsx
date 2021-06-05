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
import useAuthentication from 'hooks/useAuthentication'
import useFavorites from 'hooks/useFavorites'
import useWatchlist from 'hooks/useWatchlist'

const MediaActions = ({
	mediaType,
	mediaId
}) => {
	const { user } = useAuthentication()
	const accountId = user.id
	const { 
		checkIfFavorite, 
		refetchFavorites
	} = useFavorites()
	const { 
		checkIfInWatchlist, 
		refetchWatchlist
	} = useWatchlist()

	const mediaDetails = {
		media_type: mediaType,
		media_id: mediaId
	}

	const isFavorite = checkIfFavorite(mediaId)
	const favoriteRequest = isFavorite ? removeFromFavorite : addToFavorite

	const isInWatchlist = checkIfInWatchlist(mediaId)
	const watchlistRequest = isInWatchlist ? removeFromWatchlist : addToWatchlist

	return (
		<FlexBox>
			<RateMedia
				mediaType={mediaType}
				mediaId={mediaId}
			/>

			<Action
				mr={3}
				tooltip={isInWatchlist ? 'Remove from watchlist' :'Add to watchlist'}
				color={isInWatchlist && 'green'}
				apiRequest={() => watchlistRequest(accountId, mediaDetails)}
				requestOptions={{
					onSuccess: () => refetchWatchlist(mediaType)
				}}
			>
				<BookmarkIcon/>
			</Action>

			<Action
				mr={3}
				tooltip={isFavorite ? 'Remove from favorites' :'Add to favorites'}
				color={isFavorite && 'red'}
				apiRequest={() => favoriteRequest(accountId, mediaDetails)}
				requestOptions={{
					onSuccess: () => refetchFavorites(mediaType)
				}}
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
