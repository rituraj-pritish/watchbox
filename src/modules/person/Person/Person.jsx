import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { getPersonDetails } from 'api/endpoints/person'
import Images from 'components/common/Images'
import PersonOverview from './PersonOverview'

const Person = () => {
	const { personId } =  useParams()
	const { data } = useQuery(
		['person', personId],
		() => getPersonDetails(personId) 
	)

	return (
		<div>
			<PersonOverview {...data} />
			<Images 
				data={data?.images?.profiles}
				mt={4}
			/>
		</div>
	)
}

export default Person
