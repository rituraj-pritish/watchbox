import React from 'react'

import ToggleMenu from 'components/common/ToggleMenu'
import useAuthentication from 'hooks/useAuthentication'
import Avatar from 'components/common/Avatar'
import { useHistory } from 'react-router-dom'

const BADGE_SIZE = 36

const UserBadge = () => {
	const { user, logout } = useAuthentication()
	const history = useHistory()
	const avatar_path = user?.avatar?.tmdb?.avatar_path

	return (
		<ToggleMenu 
			trigger={(
				<Avatar
					avatar_path={avatar_path}
					size={BADGE_SIZE}
				/>
			)}
		>
			{/* <div onClick={() => history.push('/lists')}>Lists</div> */}
			<div onClick={() => history.push('/lists/favorites')}>Favorites</div>
			<div onClick={() => history.push('/lists/watchlist')}>Watchlist</div>
			<hr/>
			<div onClick={logout}>Logout</div>
		</ToggleMenu>
	)
}

export default UserBadge
