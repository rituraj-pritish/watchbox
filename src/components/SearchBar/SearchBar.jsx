import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/common/ui/Input'
import debounce from 'helpers/debounce'
import { useQuery } from 'react-query'
import api from 'api'
import { ResultsContainer } from './SearchBar.styles'

const SearchBar = () => {
	const [query, setQuery] = useState()
	const { 
		data, 
		refetch,
		isFetching
	} = useQuery(
		['search', query],
		() => api('/search/multi', {}, { query }),
		{ enabled: false }
	)

	useEffect(() => {
		if (query) {
			refetch()
		}
	}, [query])

	console.log('que', data)
	return (
		<div>
			<Input
				placeholder='Search movies, tv shows or person'
				onChange={debounce(setQuery, 1000)}
			/>
			{(isFetching || data) && (
				<ResultsContainer>
					
				</ResultsContainer>
			)}
		</div>
	)
}

SearchBar.propTypes = {}

export default SearchBar
