import React, { useEffect, useState } from 'react'

import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg'
import Input from 'components/common/ui/Input'
import debounce from 'helpers/debounce'
import { useQuery } from 'react-query'
import api from 'api'
import { Results, ResultsContainer } from './SearchBar.styles'
import ListItem from 'components/common/ListItem'
import Link from 'components/common/ui/Link'
import Icon from 'components/common/ui/Icon'

const SearchBar = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [query, setQuery] = useState('')

	const { 
		data, 
		refetch, 
		isFetching, 
		isFetched,
		remove 
	} = useQuery(
		['search', query],
		() => api('/search/multi', {}, { query }),
		{ enabled: false }
	)

	useEffect(() => {
		if (query) {
			setIsVisible(true)
			refetch()
		}
	}, [query])

	useEffect(() => {
		if(!isVisible && (isFetching || isFetched)) {
			remove()
		}
	}, [isVisible])

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
		<>
			<Input
				placeholder='Search movies, tv shows or person'
				onChange={debounce(setQuery, 1000)}
			/>
			{isVisible && (
				<ResultsContainer>
					<div>
						<Icon 
							color='textTertiary'
							my={3}
							ml='auto'
							mr={3}
							onClick={() => setIsVisible(false)}
						>
							<CrossIcon/>
						</Icon>
						<Results>
							{render()}
						</Results>
						<Link
							align='right'
							mr={3}
							p={3}
						>
						View all results
						</Link>
					</div>
				</ResultsContainer>
			)}
		</>
	)
}

export default SearchBar
