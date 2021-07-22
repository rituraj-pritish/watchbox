import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'

import Button from 'components/common/ui/Button'
import Modal from 'components/common/Modal'
import ListForm from './ListForm'
import Text from 'components/common/ui/Text'
import { createList, updateList } from 'api/endpoints/lists'

const ListFormContainer = ({ list, trigger: formTrigger }) => {
	const isEditing = !!list
	const client = useQueryClient()
	const mutationOptions = {
		onSuccess: () => {
			client.fetchQuery(['lists'])
		}
	}	

	const { 
		mutateAsync: create, 
		isLoading: isCreating 
	} = useMutation(createList, mutationOptions)
	const { 
		mutateAsync: update, 
		isLoading: isUpdating 
	} = useMutation(updateList, mutationOptions)

	const modalRef = useRef()
	const trigger = formTrigger 
		? formTrigger
		: isEditing
			? <Text>Edit</Text>
			: <Button>Create List</Button>

	const handleSubmit = (values) => {
		const mutateFn = isEditing ? update : create

		return mutateFn(values)
			.then(() => modalRef.current.close())
	}

	return (
		<Modal 
			ref={modalRef}
			trigger={trigger}
			styles={{
				wrapper: {
					width: '35rem',
					height: 'fit-content'
				}
			}}
		>
			<ListForm
				isEditing={isEditing}
				initialValues={list}
				isLoading={isUpdating || isCreating}
				onSubmit={handleSubmit}
				onCancel={modalRef?.current?.close}
			/>
		</Modal>
	)
}

ListFormContainer.propTypes = {
	id: PropTypes.number
}

export default ListFormContainer
