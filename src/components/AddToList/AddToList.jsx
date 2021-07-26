import React from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQuery } from 'react-query'

import Action from 'components/common/Action'
import { ReactComponent as ListIcon } from 'assets/icons/list-dotted.svg'
import Modal from 'components/common/Modal'
import { addToList, getLists } from 'api/endpoints/lists'
import useAuthentication from 'hooks/useAuthentication'
import Text from 'components/common/ui/Text'
import Button from 'components/common/ui/Button'
import PageLoader from 'components/common/Loader/PageLoader'
import { BUTTON_TYPES } from 'constants/buttons'
import ListFormContainer from 'modules/lists/ListForm'
import FlexBox from 'components/common/ui/FlexBox'
import LoadingWrap from 'components/common/LoadingWrap'
import ListCard from './ListCard'

const AddToList = ({
	mediaType,
	mediaId
}) => {
	const { user, isAuthenticated } = useAuthentication()
	const { mutateAsync: add, isLoading: isAdding } = useMutation(
		(listId) => addToList(listId, mediaId)
	)
	const { data, isLoading, refetch: fetchLists } = useQuery(
		'lists',
		() => getLists(user?.accountId),
		{
			enabled: false
		}
	)

	return (
		<Modal
			onOpen={fetchLists}
			trigger={(
				<Action
					mr={3}
					enablePropagation={isAuthenticated}
					tooltip={`Add ${mediaType} to list`}
					onClick={() => {}}
				>
					<ListIcon/>
				</Action>
			)}
			styles={{
				wrapper: {
					width: '25rem',
					height: 'fit-content',
					maxHeight: '40vh'
				}
			}}
			header={(
				<Text 
					size={3}
					bold
					mb={3}
					align='center'
				>
				Select list
				</Text>
			)}
			footer={(
				<>
					<hr/>
					<ListFormContainer
						trigger={(
							<Button 
								width='100%'
								type={BUTTON_TYPES.OUTLINED}
								mt={3}
							>
							Create new List
							</Button>
						)}
					/>
				</>
			)}
		>
			{isLoading && <PageLoader text='Loading lists' />}
			{data?.results?.length === 0 && (
				<Text
					align='center'
					color='textTertiary'
				>
					No lists created yet.
				</Text>
			)}
			<LoadingWrap isLoading={isAdding}>
				{data?.results?.map(list => (
					<ListCard
						key={list.id}
						addToList={add}
						{...list}
					/>
				))}
			</LoadingWrap>
			<FlexBox mt={2}/>
		</Modal>
	)
}

AddToList.propTypes = {
	mediaType: PropTypes.string.isRequired,
	mediaId: PropTypes.number.isRequired
}

export default AddToList
