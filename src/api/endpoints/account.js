import api from 'api'

export const addToFavorite = (accountId, body) => {
	return api(`/account/${accountId}/favorite`, {
		method: 'POST',
		body: {
			...body,
			favorite: true
		}
	})	
}


export const removeFromFavorite = (accountId, body) => {
	return api(`/account/${accountId}/favorite`, {
		method: 'POST',
		body: {
			...body,
			favorite: false
		}
	})	
}

export const addToWatchlist = (accountId, body) => {
	return api(`/account/${accountId}/watchlist`, {
		method: 'POST', 
		body: {
			...body,
			watchlist: true
		}
	})
}

export const removeFromWatchlist = (accountId, body) => {
	return api(`/account/${accountId}/watchlist`, {
		method: 'POST',
		body: {
			...body,
			watchlist: false
		}
	})
}
