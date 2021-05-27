export default (keys) => {
	if (!Array.isArray(keys)) {
		throw new Error('keys must me an array')
	}

	const search = window.location.search
	const params = new URLSearchParams(search)

	const returnParams = {}
	keys.forEach(key => {
		returnParams[key] = params.get(key) || ''
	})

	return returnParams
}
