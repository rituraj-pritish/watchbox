import api from 'api'

export const getLists = (accountId) => {
	return api(`/account/${accountId}/lists`)
}

export const getList = (listId) => {
	return api(`/list/${listId}`)
}

export const createList = (body) => {
	return api(
		'/list',
		{
			method: 'POST',
			body
		}
	)
}

export const updateList = (body) => {
	return api(
		'/list',
		{
			method: 'PUT',
			body
		}
	)
}

export const deleteList = (listId) => {
	return api(`/list/${listId}`, { method: 'DELETE' })
}