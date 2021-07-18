import api from 'api'

export const getLists = (accountId) => {
	return api(`/account/${accountId}/lists`)
}

export const getList = (listId) => {
	return api(`/lists/${listId}`)
}