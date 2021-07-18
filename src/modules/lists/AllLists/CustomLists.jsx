import React from 'react'
import { useQuery } from 'react-query'

import Text from 'components/common/ui/Text'
import { getLists } from 'api/endpoints/lists'
import useAuthentication from 'hooks/useAuthentication'
import ListCard from './ListCard'
import PageLoader from 'components/common/Loader/PageLoader'

const CustomLists = () => {
	const { user } = useAuthentication()
  
	const { data, isLoading } = useQuery(
		'lists',
		() => getLists(user?.accountId)
	)

	return (
		<div>
			<Text 
				my={4}
				size={4}
				color='primary'
				bold
			>
        Custom Lists
			</Text>

			{isLoading && <PageLoader text='Loading lists'/>}

			{data?.results.map(item => (
				<ListCard
					key={item.id}
					to={`/lists/custom/${item.id}`}
					label={item.name}
					{...item}
				/>
			))}
		</div>
	)
}

export default CustomLists
