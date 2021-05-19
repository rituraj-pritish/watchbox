import React, { useEffect, useState } from 'react'

import Input from 'components/common/ui/Input'
import debounce from 'helpers/debounce'
import { useQuery } from 'react-query'
import api from 'api'
import { ResultsContainer } from './SearchBar.styles'
import ListItem from 'components/common/ListItem'
import Link from 'components/common/ui/Link'
import useComponentVisible from 'hooks/useComponentVisible'

const SearchBar = () => {
	const [ref, isVisible, setIsVisible] = useComponentVisible()
	const [query, setQuery] = useState()
	const { data, refetch, isFetching } = useQuery(
		['search', query],
		() => api('/search/multi', {}, { query }),
		{ enabled: false }
	)

	useEffect(() => {
		if (query) {
			refetch()
		}
	}, [query])

	useEffect(() => {
		if(isFetching || data) {
			setIsVisible(true)
		}
	}, [isFetching, data])

	const render = () => {
		if (!data)
			return new Array(3).fill(0).map((_, idx) => (
				<ListItem
					small
					key={idx}
				/>))

		return data?.results.map((item) => (
			<ListItem
				key={item.id}
				small
				{...item}
			/>
		))
	}

	return (
		<div>
			<Input
				placeholder='Search movies, tv shows or person'
				onChange={debounce(setQuery, 1000)}
			/>
			{isVisible && (
				<ResultsContainer ref={ref}>
					<div>
						{render()}
					</div>
					<Link
						align='right'
						ml={-3}
					>
						View all results
					</Link>
				</ResultsContainer>
			)}
		</div>
	)
}

export default SearchBar
