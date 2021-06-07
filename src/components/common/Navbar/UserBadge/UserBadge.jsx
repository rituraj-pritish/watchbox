import React from 'react'

import ToggleMenu from 'components/common/ToggleMenu'
import Image from 'components/common/ui/Image'
import useAuthentication from 'hooks/useAuthentication'

const UserBadge = () => {
	const { user, logout } = useAuthentication()
	const avatar_path = user?.avatar?.tmdb?.avatar_path

	return (
		<ToggleMenu 
			trigger={(
				<Image
					circle
					url={avatar_path}
					width={37}
					height={37}
				/>
			)}
		>
			<div onClick={logout}>Logout</div>
		</ToggleMenu>
	)
}

export default UserBadge
