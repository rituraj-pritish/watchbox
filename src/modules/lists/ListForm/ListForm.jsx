import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from 'components/common/ui/Input'
import FlexBox from 'components/common/ui/FlexBox'
import Button from 'components/common/ui/Button'
import { BUTTON_VARIANTS } from 'constants/buttons'

const ListForm = ({ isLoading, isEditing, onCancel ,onSubmit }) => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [isPublic, setIsPublic] = useState(false)

	const handleSubmit = () => {
		onSubmit({
			name,
			description,
			public: isPublic
		})
	}

	return (
		<div>
			<Input
				isRequired
				label='Name'
				placeholder='Enter name'
				onChange={setName}
				mb={3}
			/>
			<Input
				label='Description'
				placeholder='Enter description'
				onChange={setDescription}
			/>
			<FlexBox 
				justifyContent='flex-end'
				mt={3}
			>
				<Button 
					variant={BUTTON_VARIANTS.CANCEL}
					mr={3}
					onClick={onCancel}
				>
          Cancel
				</Button>
				<Button 
					onClick={handleSubmit}
					disabled={!name}
					isLoading={isLoading}
				>
					{isEditing ? 'Update' : 'Create'}
				</Button>
			</FlexBox>
		</div>
	)
}

ListForm.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default ListForm
