import React from 'react'
import PropTypes from 'prop-types'
import Image from '../ui/Image'

const Avatar = ({
	avatar_path,
	size
}) => {
	const isGravatar = avatar_path?.includes('gravatar')

	return (
		<Image
			circle
			width={size}
			height={size}
			directUrl={isGravatar ? avatar_path.slice(1) : undefined}
			url={!isGravatar ? avatar_path : undefined}
		/>
	)
}

Avatar.propTypes = {
	avatar_path: PropTypes.string,
	size: PropTypes.number
}

export default Avatar
