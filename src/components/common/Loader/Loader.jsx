import React from 'react'
import PropTypes from 'prop-types'
import { Ring } from 'react-spinners-css'

const Loader = ({
	size = 20,
	...props
}) => {
	return (
		<Ring
			size={size}
			{...props}
		/>    
	)
}

Loader.propTypes = {
	size: PropTypes.number
}

export default Loader
