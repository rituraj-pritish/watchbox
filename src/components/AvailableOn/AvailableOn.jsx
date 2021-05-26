import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { getWatchProviders } from 'api/endpoints/media'

const AvailableOn = ({ mediaType, mediaId }) => {
	const { data } = useQuery(
		[mediaType, mediaId, 'watch_providers'],
		() => getWatchProviders(mediaType, mediaId)
	)
	console.log('da', data)
	return (
		<div>
      
		</div>
	)
}

AvailableOn.propTypes = {

}

export default AvailableOn
