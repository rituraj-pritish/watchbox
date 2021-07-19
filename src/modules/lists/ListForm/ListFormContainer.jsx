import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'

import Button from 'components/common/ui/Button'
import Modal from 'components/common/Modal'
import ListForm from './ListForm'
import Text from 'components/common/ui/Text'
import { createList, updateList } from 'api/endpoints/lists'

const ListFormContainer = ({ isEditing = false }) => {
	const client = useQueryClient()
	const mutationOptions = {
		onSuccess: () => {
			client.fetchQuery(['lists'])
		}
	}	

	const { mutate: create, isLoading: isCreating } = useMutation(createList, mutationOptions)
	const { mutate: update, isLoading: isUpdating } = useMutation(updateList, mutationOptions)

	const modalRef = useRef()
	const trigger = isEditing
		? <Text>Edit</Text>
		: <Button>Create List</Button>

	return (
		<Modal 
			ref={modalRef}
			trigger={trigger}
			styles={{
				width: '35rem',
				height: 'fit-content'
			}}
		>
			<ListForm
				isEditing={isEditing}
				isLoading={isUpdating || isCreating}
				onSubmit={isEditing ? update : create}
				onCancel={modalRef?.current?.close}
			/>
		</Modal>
	)
}

ListFormContainer.propTypes = {
	isEditing: PropTypes.bool
}

export default ListFormContainer
