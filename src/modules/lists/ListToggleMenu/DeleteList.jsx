import React from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'

import Dialog from 'components/Dialog'
import Text from 'components/common/ui/Text'
import { deleteList } from 'api/endpoints/lists'

const DeleteList = ({ id }) => {
	const client = useQueryClient()
	const { mutateAsync, isLoading } = useMutation(
		() => deleteList(id),
		{
			onSuccess: () => {
				client.fetchQuery(['lists'])
			}
		}
	)
	
	return (
		<Dialog
			trigger={(
				<Text
					color='danger'
				>
          Delete
				</Text>
			)}
			title='Are you sure you want to delete list ?'
			isLoading={isLoading}
			onConfirm={mutateAsync}
			forDeletion
		/>
	)
}

DeleteList.propTypes = {
	id: PropTypes.string.isRequired
}

export default DeleteList
