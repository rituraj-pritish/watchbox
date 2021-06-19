import React from 'react'

import ToggleMenu from 'components/common/ToggleMenu'
import useAuthentication from 'hooks/useAuthentication'
import Avatar from 'components/common/Avatar'

const BADGE_SIZE = 35

const UserBadge = () => {
	const { user, logout } = useAuthentication()
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
			<div onClick={logout}>Logout</div>
		</ToggleMenu>
	)
}

export default UserBadge
