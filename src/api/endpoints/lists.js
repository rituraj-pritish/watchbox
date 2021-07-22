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

export const addToList = (listId, mediaId) => {
	return api(`/list/${listId}/add_item`, { method: 'POST', body: { media_id: mediaId } })
}

export const removeFromList = (listId, mediaId) => {
	return api(`/list/${listId}/remove_item`, { method: 'POST', body: { media_id: mediaId } })
}