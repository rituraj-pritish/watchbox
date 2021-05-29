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

	useEffect(() => {
		setCurrentPage(1)
	}, [totalPages])

	const breakEl = <Number disabled>...</Number>

	const halfRange = parseInt(pageRange / 2)

	const showStartBreak = currentPage > halfRange &&
		currentPage !== halfRange + 1 &&
		totalPages > (pageRange + 1)
	const showEndBreak = currentPage <= (totalPages - pageRange) &&
		totalPages > (pageRange + 1)

	const getNearValues = () => {
		let diff = halfRange
		return Array.from({ length: pageRange }, () => {
			const val = currentPage - diff
			diff -= 1
			return val
		})
	}

	const getPageRange = () => {
		if(totalPages <= pageRange + 1) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

		if(showEndBreak && showStartBreak) {
			if(currentPage - halfRange < halfRange + 1) {
				return Array.from(({ length: pageRange }), (_, i) => halfRange + 1 + i)
			}

			return getNearValues()
		} else if(showStartBreak) {
			return Array.from({ length: pageRange }, (_, i) => totalPages - i)
				.reverse()
		} else if(showEndBreak) {
			if(currentPage - (parseInt(pageRange / 2)) < 1) {
				return Array.from({ length: pageRange }, (_, i) => i + 1)
			}

			return getNearValues()
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
