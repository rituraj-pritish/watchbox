import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg'
import FlexBox from '../ui/FlexBox'
import { Number, StyledIcon } from './Pagination.styles'

const Pagination = ({ 
	initialPage = 1, 
	totalPages, 
	pageRange = 5,
	...rest 
}) => {
	const [currentPage, setCurrentPage] = useState(initialPage)

	const incrementPage = () => setCurrentPage((p) => p + 1)
	const decrementPage = () => setCurrentPage((p) => p - 1)

	const breakEl = <Number disabled>...</Number>

	const showStartBreak = currentPage > pageRange 
	const showEndBreak = currentPage <= (totalPages - pageRange)

	const getPageRange = () => {
		if(currentPage <= pageRange && currentPage >= 1) {
			return Array.from({ length: pageRange }, (_, i) => i + 1)
		} else if(currentPage >= (totalPages - pageRange) && currentPage <= totalPages) {
			return Array.from({ length: pageRange }, (_, i) => totalPages - i)
				.sort((a,b) => a - b)
		}	else {
			let diff = parseInt(pageRange / 2)
			return Array.from({ length: pageRange }, () => {
				const val = currentPage - diff
				diff -= 1
				return val
			})
		}
	}

	return (
		<FlexBox
			justifyContent='center'
			{...rest}
		>
			<StyledIcon
				disabled={currentPage === 1}
				color='primary'
				onClick={decrementPage}
			>
				<ChevronLeft />
			</StyledIcon>

			{showStartBreak && (
				<>
					<Number onClick={() => setCurrentPage(1)}>1</Number>
					{breakEl}
				</>
			)}

			{getPageRange().map((n) => (
				<Number
					selected={n === currentPage}
					onClick={() => setCurrentPage(n)}
					key={n}
				>
					{n}
				</Number>
			))}

			{showEndBreak && (
				<>
					{breakEl}
					<Number onClick={() => setCurrentPage(totalPages)}>{totalPages}</Number>
				</>
			)}

			<StyledIcon
				disabled={currentPage === totalPages}
				color='primary'
				onClick={incrementPage}
			>
				<ChevronRight />
			</StyledIcon>
		</FlexBox>
	)
}

Pagination.propTypes = {
	initialPage: PropTypes.number,
	totalPages: PropTypes.number.isRequired,
	pageRange: PropTypes.number
}

export default Pagination
