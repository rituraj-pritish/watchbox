import React from 'react'
import { useQuery } from 'react-query'

import Text from 'components/common/ui/Text'
import { getLists } from 'api/endpoints/lists'
import useAuthentication from 'hooks/useAuthentication'
import ListCard from './ListCard'
import PageLoader from 'components/common/Loader/PageLoader'
import FlexBox from 'components/common/ui/FlexBox'
import ListForm from '../ListForm'

const CustomLists = () => {
	const { user } = useAuthentication()
  
	const { data, isLoading } = useQuery(
		'lists',
		() => getLists(user?.accountId)
	)

	return (
		<div>
			<FlexBox
				alignItems='center'
				justifyContent='space-between'
				my={4}
			>
				<Text 
					size={4}
					color='primary'
					bold
				>
        Custom Lists
				</Text>
				<ListForm/>
			</FlexBox>

			{isLoading && <PageLoader text='Loading lists'/>}

			{data && data.results.map(item => (
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
