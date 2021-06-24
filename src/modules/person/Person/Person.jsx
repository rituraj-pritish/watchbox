import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { getPersonDetails } from 'api/endpoints/person'
import Images from 'components/common/Images'
import PersonOverview from './PersonOverview'
import Carousel from 'components/common/Carousel'
import { sortFn } from 'helpers/array'

const Person = () => {
	const { personId } =  useParams()
	const { data } = useQuery(
		['person', personId],
		() => getPersonDetails(personId) 
	)

	const starringMedia = data
		?	sortFn(data?.combined_credits?.cast, 'popularity')
		: null

	return (
		<div>
			<PersonOverview {...data} />
			<Carousel
				title='Starred In'
				data={starringMedia}
				mt={4}
			/>
			<Images 
				data={data?.images?.profiles}
				viewAllLink={`/person/${personId}/media/photos`}
				mt={4}
			/>
		</div>
	)
}

export default Person
