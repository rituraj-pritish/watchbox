import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg'
import FlexBox from '../ui/FlexBox'
import { Number, StyledIcon } from './Pagination.styles'
import useUrlParams from 'hooks/useUrlParams'

const Pagination = ({
	totalPages, 
	pageRange = 5,
	...rest 
}) => {
	const history = useHistory()
	const { p: page } = useUrlParams(['p'])
	const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1)

	const incrementPage = () => setCurrentPage((p) => p + 1)
	const decrementPage = () => setCurrentPage((p) => p - 1)

	useEffect(() => {
		const { pathname } = history.location
		history.push(`${pathname}?p=${currentPage}`)
	}, [currentPage])

	const breakEl = <Number disabled>...</Number>

	const showStartBreak = currentPage > pageRange 
	const showEndBreak = currentPage <= (totalPages - pageRange)

	const getPageRange = () => {
		if(totalPages < pageRange) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

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
