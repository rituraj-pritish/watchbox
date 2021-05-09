import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Carousel from './Carousel'
import useOnScreen from 'hooks/useOnScreen'
import api from 'api'

const CarouselContainer = ({
	path,
	...rest
}) => {
	const ref = useRef()
	const isTriggered = useOnScreen(ref, '0px', true )
	const [data, setData] = useState(null)

	useEffect(() => {
		if(isTriggered) {
			if(rest.toggleOptions) {
				api(rest.toggleOptions[0].value).then((res) => setData(res.results))
			}else {
				api(path).then(res => setData(res.results))
			}
		}
	}, [isTriggered])

	return (
		<Carousel
			containerRef={ref}
			{...rest}
			onToggleChange={val => {
				setData(null)
				api(val).then(res => setData(res.results))
			}}
			data={data}
		/>
	)
}

CarouselContainer.propTypes = {
	path: PropTypes.string
}

export default CarouselContainer
