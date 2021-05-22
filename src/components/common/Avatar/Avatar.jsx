import React from 'react'
import PropTypes from 'prop-types'
import Image from '../ui/Image'

const Avatar = ({
	avatar_path,
	name,
	size
}) => {
	return (
		<Image
			circle
			width={size}
			height={size}
			url={avatar_path}
		/>
	)
}

Avatar.propTypes = {

}

export default Avatar
