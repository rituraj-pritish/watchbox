import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Carousel from './Carousel'
import usePositionOffset from 'hooks/usePositionOffset'
import useCarouselData from 'hooks/useCarouselData'

const CarouselContainer = ({ request, toggleOptions, requestDeps = [], ...rest }) => {
	const [ref, isTriggered] = usePositionOffset(300)
	
	if('data' in rest) {
		return (
			<Carousel 
				containerRef={ref}
				{...rest}
			/>
		)
	}
	
	const queries = useCarouselData(
		request ? [request] : toggleOptions
	)
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
	const [data, setData] = useState(null)

	useEffect(() => {
		if (!isTriggered) return
		if(queries[selectedOptionIndex].isFetched) return
		queries[selectedOptionIndex].refetch()
	}, [isTriggered, ...requestDeps])

	useEffect(() => {
		if (queries[selectedOptionIndex].isSuccess) {
			setData(queries[selectedOptionIndex].data.results)
		}
	}, [queries])

	const onToggleChange = val => {
		const idx = toggleOptions.findIndex(({ value }) => value === val)
		if(!queries[idx].isSuccess) {
			queries[idx].refetch()
		}
		setSelectedOptionIndex(idx)
	}

	return (
		<Carousel
			containerRef={ref}
			isLoading={queries[selectedOptionIndex].isLoading}
			toggleOptions={toggleOptions}
			onToggleChange={onToggleChange}
			data={data}
			{...rest}
		/>
	)
}

CarouselContainer.propTypes = {
	request: PropTypes.object,
	toggleOptions: PropTypes.array,
	requestDeps: PropTypes.array
}

export default CarouselContainer
